module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        sass: {
            dist: {
                files: {
                    'assets/css/styles.css': 'assets/src/sass/styles.scss',
                    'assets/css/print.css': 'assets/src/sass/print.scss'
                },

                options: {
                    sourcemap: 'none',
                    outputStyle: 'compressed'
                }
            }
        },

        uglify: {
            script: {
                files: {
                    'assets/js/script.js': [
                        'assets/src/js/vendor/*.js',
                        'assets/src/js/*.js'
                    ]
                }
            }
        },

        watch: {
            css: {
                files: 'assets/src/sass/**/*.scss',
                tasks: ['sass']
            },

            js: {
                files: 'assets/src/js/**/*.js',
                tasks: ['uglify']
            }
        }
    });

    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.registerTask('default', ['watch']);
};