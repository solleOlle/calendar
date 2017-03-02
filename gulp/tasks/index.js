'use strict';

var gulp = require('gulp');
var gulpif = require('gulp-if');
var replace = require('gulp-replace');
var minifyHTML = require('gulp-minify-html');
var livereload = require('gulp-livereload');
var inlinesource = require('gulp-inline-source');
var fs = require('fs');

var callback = function () {
    return gulp.src(config.paths.src.index)
        .pipe(replace('<!--styles-->', '<link href="/static/css/' + config.filenames.styles + '" rel="stylesheet">'))
        .pipe(replace('<!--scripts-->', '<script src="/static/js/' + config.filenames.scripts + '"></script>'))
        .pipe(gulp.dest(config.paths.dest.index))
        .pipe(livereload());
};

gulp.task('index:browserify', ['styles','browserify'], callback);
gulp.task('index:watchify', ['styles','watchify'], callback);
