'use strict';

var gulp = require('gulp');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var sourcemaps = require('gulp-sourcemaps');
var uglify = require('gulp-uglify');
var replace = require('gulp-replace');
var fs = require('fs');


module.exports = gulp.task('browserify', ['clean:scripts', 'templates', 'lint'], function () {
    var b = browserify({
        entries: config.paths.src.modules,
        transform: ['browserify-shim'],
        debug: true
    });

    return b.bundle()
        .on('error', function (err) {
            console.log(err.toString());
            this.emit('end');
        })
        .pipe(source(config.filenames.scripts))
        .pipe(buffer())
        .pipe(sourcemaps.init({loadMaps: true}))
        .pipe(sourcemaps.write('../maps'))
        .pipe(gulp.dest(config.paths.dest.scripts));
});
