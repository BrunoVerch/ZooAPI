'use strict';

var gulp    = require('gulp');
var nodemon = require('gulp-nodemon');
var jshint  = require('gulp-jshint');
var stylish = require('jshint-stylish');
var complexity  = require('gulp-complexity');
var sourcemaps = require('gulp-sourcemaps');
var path = require('path');

var paths = {
    src: ['./src/**/*.js'],
    sourceRoot: path.join(__dirname,'src')
}

gulp.task('start', function() {
	nodemon({
	    script: 'build/server.js',
	    ext: 'js html',
	    tasks: ['lint']
	})
});

gulp.task('lint', function() {
  return gulp.src(paths.src)
    .pipe(jshint())
    .pipe(jshint.reporter(stylish))
    .pipe(complexity({
    	jsLintXML: 'report.xml'
    }));
});