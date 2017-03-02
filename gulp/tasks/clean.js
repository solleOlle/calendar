'use strict';

var gulp = require('gulp');
var rimraf = require('gulp-rimraf');

gulp.task('clean:tmp', function () {
    return gulp.src(TMP_FOLDER, {read: false})
        .pipe(rimraf());
});

gulp.task('clean:images', function () {
    return gulp.src(config.paths.dest.images, {read: false})
        .pipe(rimraf());
});

gulp.task('clean:scripts', function () {
    return gulp.src([config.paths.dest.scripts, config.paths.dest.maps], {read: false})
        .pipe(rimraf());
});

gulp.task('clean:styles', function () {
    return gulp.src(config.paths.dest.styles, {read: false})
        .pipe(rimraf());
});

gulp.task('clean:build', ['clean:images', 'clean:scripts', 'clean:styles']);

module.exports = gulp.task('clean', ['clean:tmp','clean:build']);
