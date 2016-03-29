// http://gruntjs.com/configuring-tasks#building-the-files-object-dynamically
module.exports = function(grunt) {
    require('time-grunt')(grunt);
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        imagemin: {
            png: {
                options: {
                    optimizationLevel: 7
                },
                files: [
                    {
                        // Set to true to enable the following options…
                        expand: true,
                        // cwd is 'current working directory'
                        cwd: 'img/',
                        src: ['img/*.png'],
                        // Could also match cwd line above. i.e. project-directory/img/
                        dest: 'img/compressed/',
                        ext: '.png'
                    }
                ]
            },
            jpg: {
                options: {
                    progressive: true
                },
                files: [
                    {
                        // Set to true to enable the following options…
                        expand: true,
                        // cwd is 'current working directory'
                        cwd: 'img/',
                        src: ['img/*.jpg'],
                        // Could also match cwd. i.e. project-directory/img/
                        dest: 'img/compressed/',
                        ext: '.jpg'
                    }
                ]
            }
        },
        htmlmin: {
            app:          {
                src:        'aprilFoolsPartialOriginal2.html',
                dest:       'dist/aprilFoolsPartialOriginal2.html',
                options:
                     {
                        collapseBooleanAttributes:      true,
                        collapseWhitespace:             true,
                        removeAttributeQuotes:          true,
                        removeComments:                 true, // Only if you don't use comment directives!
                        removeEmptyAttributes:          true,
                        removeRedundantAttributes:      true,
                        removeScriptTypeAttributes:     true,
                        removeStyleLinkTypeAttributes:  true,
                        minifyCSS:                      true,
                        minifyJS:                       true

                    }

            }
        },
        ngtemplates: {
            app:          {
                src:        'dist/aprilFoolsPartialOriginal2.html',
                dest:       'dist/aprilfools2.js',
                options:    {
                    htmlmin:  {
                        collapseBooleanAttributes:      true,
                        collapseWhitespace:             false,
                        removeAttributeQuotes:          true,
                        removeComments:                 true, // Only if you don't use comment directives!
                        removeEmptyAttributes:          true,
                        removeRedundantAttributes:      true,
                        removeScriptTypeAttributes:     true,
                        removeStyleLinkTypeAttributes:  true
                    }
                }
            }
        },
    });

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');
    grunt.loadNpmTasks('grunt-angular-templates');
    grunt.loadNpmTasks('grunt-contrib-imagemin');

    grunt.registerTask('templates', ['htmltemplates']);
    grunt.registerTask('imagemin', ['imagemin']);
    grunt.registerTask('default', ['htmlmin','ngtemplates']);

};

