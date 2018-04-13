module.exports = function (grunt) {
    grunt.initConfig({
        connect: {
            server: {
                options: {
                    port: 8000,
                    base: '.',
                    livereload: true,
                    open: true,
                    useAvailablePort: true
                }
            }
        },

        watch: {
            html: {
                files: '*.html'
            },
            options: {
                livereload: true
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('serve', ['connect', 'watch']);
};
