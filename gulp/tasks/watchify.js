'use strict';

var gulp = require('gulp');
var watchify = require('watchify');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var livereload = require('gulp-livereload');
var buffer = require('vinyl-buffer');

module.exports = gulp.task('watchify', ['templates','clean:scripts'], function () {
    var bundler = browserify({
        entries: [config.paths.src.modules],
        transform: 'browserify-shim',
        cache: {},
        packageCache: {},
        debug: true,
        plugin: [watchify]
    });

    bundler.on('update', rebundle);

    function rebundle() {
        return bundler.bundle()
            .on('error', function (err) {
                console.log(err.toString());
                this.emit('end');
            })
            .pipe(source(config.filenames.scripts))
            .pipe(buffer())
            .pipe(gulp.dest(config.paths.dest.scripts))
            .pipe(livereload());
    }

    return rebundle();
});
