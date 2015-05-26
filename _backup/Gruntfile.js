module.exports = function(grunt) {
  require('jit-grunt')(grunt);

	grunt.initConfig({
		concat:{
      options: {
        separator: ';',
      },
      css: {
        src: [
          'web/css/style.css'
        ],
        dest: 'web/css/bundle.css'
      }
    },
    sass: {
			dist: {
				files: {
					'web/css/style.css' : 'web/sass/style.scss'
				}
			}
		},
    uglify:{
      js: {
            files: {
              'web/build/js/bundle.min.js': [
                './public/vendor/jquery/dist/jquery.min.js',
                './public/vendor/bootstrap/dist/js/bootstrap.min.js',
                './public/vendor/angular/angular.min.js',
                './public/vendor/angular-resource/angular-resource.min.js',
                './public/vendor/angular-route/angular-route.min.js',
                'web/js/index.js'
              ]
            }
          }
    },
    cssmin: {
        css: {
            files: {
              'web/build/css/bundle.min.css': [
                './public/vendor/bootstrap/dist/css/bootstrap.min.css',
                './public/vendor/bootstrap/dist/css/bootstrap-theme.min.css',
                './public/vendor/font-awesome/css/font-awesome.min.css',
                'web/css/style.css'
              ]
            }
        }
    },
		watch: {
			css: {
				files: '**/*.scss',
				tasks: ['sass', 'cssmin:css']
			},
      js: {
        files: '**/*.js',
        tasks: ['uglify', 'uglify:js']
      }
		}
	});

  grunt.registerTask('default', ['sass', 'cssmin', 'uglify', 'watch']);
}
