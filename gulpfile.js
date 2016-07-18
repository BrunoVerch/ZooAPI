'use strict';

var gulp    = require('gulp');
var nodemon = require('gulp-nodemon');
var jshint  = require('gulp-jshint');
var stylish = require('jshint-stylish');
var complexity  = require('gulp-complexity');
var babel = require('gulp-babel');
var sourcemaps = require('gulp-sourcemaps');
var path = require('path');

var paths = {
    src: ['./src/**/*.js'],
    build: 'build',
    sourceRoot: path.join(__dirname,'src')
}

gulp.task('start', function() {
	nodemon({
	    script: 'build/server.js',
	    ext: 'js html',
	    tasks: ['babel','lint']
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

gulp.task('babel', function() {
    return gulp.src(paths.src)
        .pipe(sourcemaps.init())
        .pipe(babel({
            presets: ['es2015']
        }))
        .pipe(sourcemaps.write('.',{ sourceRoot: paths.sourceRoot }))
        .pipe(gulp.dest(paths.build));
});