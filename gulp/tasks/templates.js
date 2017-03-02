'use strict';

var gulp = require('gulp');
var rename = require('gulp-rename');
var templateCache = require('gulp-angular-templatecache');
var header = require('gulp-header');

module.exports = gulp.task('templates', ['clean:tmp'], function () {
    return gulp.src([config.paths.src.templates, config.paths.src.templatesHTML])
        .pipe(rename(function (path) {
            path.extname = '';
        }))
        .pipe(templateCache({
            standalone: true,
            module: config.filenames.templates.angular.moduleName,
            root: 'html'
        }))
        .pipe(header('module.exports = '))
        .pipe(gulp.dest(config.paths.src.templatesCompiled));
});
