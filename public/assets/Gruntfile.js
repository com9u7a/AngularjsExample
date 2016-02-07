module.exports = function(grunt) {
  //Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    ngAnnotate:{
      options: {
        singleQuotes: true,
        add: true
      },
      app1: {
        expand: true,
        src:'js/**/*.js',
        ext: '.annotated.js',
        extDot: 'last',
      },
    },
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n',
        mangle:false
      },
      build: {
      src: ['js/angular.annotated.js','js/angular-ui-router.annotated.js','js/ui-bootstrap-tpls-0.14.3.annotated.js','js/module.annotated.js','js/config.annotated.js','js/controllers.annotated.js',],
      dest: 'build/<%= pkg.name %>.min.js'
      }
    },
    cssmin: {
      target: {
        files: [{
          expand:true,
          cwd: 'css',
          src: ['bootstrap.css','style.css'],
          dest: 'css',
          ext:'.min.css'
        }]
      }
    },
    concat: {
      css: {
        src: 'css/*min.css',
        dest: 'build/style.min.css'
      }
    }
   });
    
   // Load the plugin that provides the "uglify" task.
   grunt.loadNpmTasks('grunt-ng-annotate');
   grunt.loadNpmTasks('grunt-contrib-uglify');
   grunt.loadNpmTasks('grunt-contrib-cssmin');
   grunt.loadNpmTasks('grunt-contrib-concat');
    
   // Default task(s).
   grunt.registerTask('default', ['ngAnnotate','uglify','cssmin','concat']);
};
