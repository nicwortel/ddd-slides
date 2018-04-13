module.exports = function (grunt) {
    grunt.initConfig({
        connect: {
            server: {
                options: {
                    port: 8000,
                    base: '.',
                    livereload: true,
                    open: true,
                    useAvailablePort: true,
                    keepalive: true
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-connect');

    grunt.registerTask('serve', ['connect']);
};
