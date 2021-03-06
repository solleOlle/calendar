'use strict';

var gulp = require('gulp');
var imagemin = require('gulp-imagemin');

module.exports = gulp.task('images', ['clean:images'], function () {
    return gulp.src(config.paths.src.images)
        .pipe(gulp.dest(config.paths.dest.images));
});
