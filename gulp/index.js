'use strict';

require('./config');

var gulp = require('gulp');
var fs = require('fs');
var opn = require('opn');
var tasks = fs.readdirSync('./gulp/tasks/');

tasks.forEach(function (task) {
    require('./tasks/' + task);
});

gulp.task('default', ['serve'], function () {
    opn('http://localhost:' + config.ports.staticServer);
});
