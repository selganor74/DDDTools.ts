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
            "after-build": ['build/**/.baseDir.*']
        },
        "copy": {
            "build": {
                "files": [
                    // {
                    //     "expand": true,
                    //     "cwd": 'src',
                    //     "src": [
                    //         '**/*.html', '**/*.json', '!tsconfig.json', '**/*.css',
                    //         'assets/**/*', 'Scripts/**/*', 'images/**/*'
                    //     ],
                    //     dest: 'build/'
                    // },
                    // { // pulls in nedb
                    //     expand: true,
                    //     cwd: 'node_modules/nedb/browser-version/out',
                    //     src: ['nedb.js'],
                    //     dest: 'build/lib'
                    // },
                    // { // pulls in nedb
                    //     expand: true,
                    //     cwd: 'node_modules/q/',
                    //     src: ['q.js'],
                    //     dest: 'build/lib'
                    // }
                ]
            },
            "build-tests": {
                files: [
                    
                ]

            }
        },
        ts: {
            "build": {
                tsconfig: 'src/DDDTools/tsconfig.json'
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
                        "build-test/DDDTools/*.js"
                ],
                options: {
                    vendor:
                    [
                        "build-test/lib/*.js"
                    ],
                    specs: [
                        "build-test/test/**/*-spec.js"
                    ],
                    template: require('grunt-template-jasmine-requirejs'),
                    keepRunner: true,
                    outFile: "SpecRunner.html"
                }
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
    grunt.registerTask('build', ['clean', 'ts:build','clean:after-build']);
    grunt.registerTask('build-tests', ['clean', 'ts:build', 'ts:build-tests', 'copy' ]);
    grunt.registerTask('run-tests', ['build-tests', 'jasmine:run-tests']);
};