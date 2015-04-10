module.exports = function(grunt) {

    grunt.initConfig({

        less: {
            development: {
                options: {
                    compress: true
                },
                files: {
                    "./assets/css/libraries.css" : "./assets/less/libraries.less"
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
                stripBanners : {
                    block: true
                }
            },
            js: {
                src: [
                    './bower_components/jquery/dist/jquery.js',
                    './bower_components/bootstrap/dist/js/bootstrap.js'
                ],
                dest: './../js/libraries.js'
            },
            css: {
                src: './assets/css/*.css',
                dest: './../css/libraries.css'
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
                tasks: ['less', 'concat:css']
            },
            copy: {
                files: ['./bower_components/font-awesome/fonts/*', './bower_components/headjs/dist/1.0.0/head.min.js' ],
                tasks: ['copy']
            },
            js: {
                files: [
                    './bower_components/jquery/dist/jquery.js',
                    './bower_components/bootstrap/dist/js/bootstrap.js'
                ],
                tasks: ['concat:js','uglify:js']
            },
            css: {
                files: [
                    //watched files
                    './assets/css/*.css'
                ],
                tasks: ['concat:css']
            }
        }
    });

    // Plugin loading
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-copy');


    // Task definition
    grunt.registerTask('start', ['less', 'copy', 'concat', 'uglify']);
    grunt.registerTask('default', ['watch']);

};