module.exports = function(grunt) {

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
                    }
                ]
            }
        },
        ts: {
            build: {
                tsconfig: 'src/tsconfig.json'
            },
            "build-tests": {
                tsconfig: 'src/tsconfig.json'
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
                    "build/**/*.js"
                ],
                options: {
                    specs: [
                        "test/**/*-spec.js"
                    ]
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
    grunt.registerTask('build-tests', ['clean', 'ts:build', 'copy', 'clean:after-build', 'ts:build-tests']);
    grunt.registerTask('run-tests', ['ts:build-tests', 'jasmine:run-tests']);
};