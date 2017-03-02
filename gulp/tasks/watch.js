'use strict';

var gulp = require('gulp');
var watch = require('gulp-watch');
var batch = require('gulp-batch');
var livereload = require('gulp-livereload');

module.exports = gulp.task('watch', ['index:watchify', 'styles'], function () {
    livereload.listen({basePath: config.paths.dest.server});

    var starter = function (taskName) {
        return batch(function (events, done) {
            gulp.start(taskName, done);
        });
    };

    gulp.watch(config.paths.src.livereload).on('change', function (file) {
        livereload.changed(file.path);
    });

    watch([config.paths.src.scripts], starter('lint'));
    watch([config.paths.src.templates, config.paths.src.templatesHTML], starter('templates'));
    watch([config.paths.src.stylesGlobal], starter('styles'));
});
