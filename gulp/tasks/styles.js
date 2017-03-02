'use strict';

var gulp = require('gulp');
var csso = require('gulp-csso');
var less = require('gulp-less');
var rename = require('gulp-rename');
var sourcemaps = require('gulp-sourcemaps');

function handleError(err) {
    console.log(err.toString());
    this.emit('end');
}

module.exports = gulp.task('styles', ['clean:styles'],function () {
    var filename = config.filenames.styles.split('.');
    filename.pop();
    return gulp.src(config.paths.src.styles)
        .pipe(sourcemaps.init({loadMaps: true}))
        .pipe(less().on('error', handleError))
        .pipe(sourcemaps.write('.'))
        .pipe(rename({
            basename: filename.join('.')
        }))
        .pipe(gulp.dest(config.paths.dest.styles));
});
