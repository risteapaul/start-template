module.exports = function(grunt) {

    grunt.initConfig({

        less: {
            development: {
                options: {
                    compress: false
                },
                files: {
                    "./assets/css/libraries.css" : "./assets/less/libraries.less"
                }
            }
        },

        cssmin: {
            options: {
                shorthandCompacting: false,
                roundingPrecision: -1,
                keepSpecialComments: 0
            },
            target: {
                files: {
                    './../css/libraries.css': ['./assets/css/*.css']
                }
            }
        },

        copy: {
            main: {
                files: [
                    {
                        expand: true,
                        flatten: true,
                        src: './bower_components/font-awesome/fonts/*',
                        dest: './../fonts/',
                        filter: 'isFile'
                    },
                    {
                        expand: true,
                        flatten: true,
                        src: './bower_components/headjs/dist/1.0.0/head.min.js',
                        dest: './../js/',
                        filter: 'isFile'
                    }
                ]
            }
        },

        concat: {
            options: {
                separator: ';'
            },
            js: {
                src: [
                    './bower_components/jquery/dist/jquery.js',
                    './bower_components/bootstrap/dist/js/bootstrap.js',
                    './assets/js/*.js'
                ],
                dest: './../js/libraries.js'
            }
        },

        uglify: {
            options: {
                mangle: false
            },
            js: {
                files: {
                    './../js/libraries.js' : './../js/libraries.js'
                }
            }
        },
        watch: {
            less: {
                files: ['./assets/less/*.less'],
                tasks: ['less']
            },
            copy: {
                files: ['./bower_components/font-awesome/fonts/*', './bower_components/headjs/dist/1.0.0/head.min.js' ],
                tasks: ['copy']
            },
            js: {
                files: [
                    './bower_components/jquery/dist/jquery.js',
                    './bower_components/bootstrap/dist/js/bootstrap.js',
                    './assets/js/*.js'
                ],
                tasks: ['concat:js','uglify:js']
            },
            css: {
                files: [
                    './assets/css/*.css'
                ],
                tasks: ['cssmin']
            }
        }
    });

    // Plugin loading
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-cssmin');


    // Task definition
    grunt.registerTask('hard', ['less', 'cssmin', 'copy', 'concat', 'uglify']);
    grunt.registerTask('default', ['watch']);

};