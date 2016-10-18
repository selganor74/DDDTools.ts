/// <binding AfterBuild='build' />
module.exports = function (grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        lineremover: {
            "build": {
                "files": {
                    "build/browser/ddd-tools.d.ts": "build/browser/ddd-tools.d.ts"
                },
                "options": {
                    "exclusionPattern": /^\/\/\/\ <reference\ path/
                }
            }
        },
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
            "build-tests": ['build-test/**/*'],
            "after-build": ['build/**/.baseDir.*']
        },
        "copy": {
            "build-tests": {
                files: [
                    // { // pulls in q
                    //     expand: true,
                    //     cwd: 'node_modules/q/',
                    //     src: ['q.js'],
                    //     dest: 'build-test/lib'
                    // },
                    { // pulls in angular
                        expand: true,
                        cwd: 'node_modules/angular/',
                        src: ['angular.js'],
                        dest: 'build-test/lib'
                    },
                    { // pulls in underscore
                        expand: true,
                        cwd: 'node_modules/underscore/',
                        src: ['underscore.js'],
                        dest: 'build-test/lib'
                    }, // pulls in log4javascript
                    {
                        expand: true,
                        cwd: 'node_modules/log4javascript/',
                        src: ['log4javascript.js'],
                        dest: 'build-test/lib'
                    }
                    
                ]

            }
        },
        ts: {
            "build-browser": {
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
                    "build/browser/ddd-tools.js"
                ],
                options: {
                    vendor:
                    [
                        "build-test/lib/*.js"
                    ],
                    specs: [
                        // "build-test/test/**/*-spec.js"
                        "build-test/ddd-tools-tests.js"
                    ],
                    // template: require('grunt-template-jasmine-requirejs'),
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
    grunt.loadNpmTasks('grunt-line-remover');
    grunt.loadNpmTasks('dts-generator');

    // TASKS
    grunt.registerTask('run', ['http-server']);
    grunt.registerTask('build', ['clean', 'ts:build-browser', 'lineremover:build', 'clean:after-build']);
    grunt.registerTask('build-tests', ['clean', 'ts:build-browser', 'ts:build-tests', 'copy', 'lineremover:build', 'clean:after-build']);
    grunt.registerTask('run-tests', ['build-tests', 'jasmine:run-tests']);
};