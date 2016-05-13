module.exports = function (grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
            },
            dist: {
                src: 'src/<%= pkg.name %>.js',
                dest: 'build/<%= pkg.name %>.min.js'
            }
        },
        clean: {
            build: ['build/*'],
            "after-build": ['build/**/*.d.ts']
        },
        copy: {
            build: {
                files: [
                    {
                        expand: true,
                        cwd: 'src',
                        src: [
                            '**/*.html', '**/*.json', '!tsconfig.json', '**/*.css',
                            'assets/**/*', 'Scripts/**/*', 'images/**/*'
                        ],
                        dest: 'build/'
                    },
                    { // pulls in systemjs
                        expand: true,
                        cwd: 'node_modules/systemjs/dist/',
                        src: ['system.js'],
                        dest: 'build/lib'
                    },
                    { // pulls in nedb
                        expand: true,
                        cwd: 'node_modules/nedb/browser-version/out',
                        src: ['nedb.js'],
                        dest: 'build/lib'
                    }
                ]
            },
            "build-tests": {
                files: [
                    { // pulls in systemjs
                        expand: true,
                        cwd: 'node_modules/systemjs/dist/',
                        src: ['system.js'],
                        dest: 'test/lib'
                    },
                    { // pulls in nedb
                        expand: true,
                        cwd: 'node_modules/nedb/browser-version/out',
                        src: ['nedb.js'],
                        dest: 'test/lib'
                    }
                ]

            }
        },
        ts: {
            "build": {
                tsconfig: 'src/DDDTools/tsconfig.json'
            },
            "build-nedbrepo": {
                tsconfig: "src/NeDBRepository/tsconfig.json"
            },
            "build-tests": {
                tsconfig: 'src/test/tsconfig.json'
            }
        },
        "http-server": {
            run: {
                root: 'build/',
                port: 8082,
                host: "localhost",
                showDir: false,
                openBrowser: true
            }
        },
        "jasmine": {
            "run-tests": {
                src: [
                        "test/DDDTools/CommonInterfaces/*.js",
                        "test/DDDTools/Utils/*.js",
                        "test/DDDTools/ErrorManagement/*.js",
                        "test/DDDTools/PersistableObject/*.js",
                        "test/DDDTools/Serialization/*.js",
                        "test/DDDTools/DomainEvents/*.js",
                        "test/DDDTools/ValueObject/*.js",
                        "test/DDDTools/ValueObjects/*.js",
                        "test/DDDTools/Entity/*.js",
                        "test/DDDTools/Aggregate/*.js",
                        "test/DDDTools/Repository/*.js",
                        "test/DDDTools/UnitOfWork/*.js",
                        "test/DDDTools/NeDBRepository/*.js"
                ],
                options: {
                    vendor:
                    [
                        "test/lib/nedb.js"
                    ],
                    specs: [
                        //"test/test/**/*-spec.js"
                        "test/test/DDDTools/*-spec.js"
                    ],
                    template: require('grunt-template-jasmine-requirejs'),
                    keepRunner: true,
                    outFile: "SpecRunner.html"
                }
            }
        },
        "concat": {
            options: {},
            "build": {
                src: ["build/**/*.d.ts", "!build/srcreferences.d.ts"],
                dest: "build/srcreferences.d.ts"
            }
        }
    });

    // Load the plugin that provides the "uglify" task.
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-ts');
    grunt.loadNpmTasks('grunt-contrib-jasmine');

    // TASKS
    grunt.registerTask('run', ['http-server']);
    grunt.registerTask('build', ['clean', 'ts:build', 'copy', 'clean:after-build']);
    grunt.registerTask('build-tests', ['clean', 'ts:build', "ts:build-nedbrepo", 'copy', 'clean:after-build', 'ts:build-tests']);
    grunt.registerTask('run-tests', ['build-tests', 'jasmine:run-tests']);
};