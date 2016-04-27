module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        sass: {
            dist: {
                files: {
                    'assets/css/styles.css': 'source/sass/styles.scss'
                },

                options: {
                    sourcemap: 'none',
                    outputStyle: 'compressed'
                }
            }
        },

        uglify: {
            scripts: {
                files: {
                    'assets/js/scripts.js': [
                        'source/js/vendor/*.js',
                        'source/js/*.js'
                    ]
                }
            }
        },

        watch: {
            sass: {
                files: 'source/sass/**/*.scss',
                tasks: ['sass']
            },

            scripts: {
                files: 'source/js/**/*.js',
                tasks: ['uglify']
            }
        }
    });

    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.registerTask('default', ['watch']);
};