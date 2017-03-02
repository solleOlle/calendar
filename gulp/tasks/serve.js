'use strict';

var gulp = require('gulp');
var serveStatic = require('serve-static');
var connect = require('connect');
var url = require('url');
var proxy = require('proxy-middleware');
var send = require('send');
var staticServer = connect();

module.exports = gulp.task('serve', ['index:watchify', 'watch', 'images'], function (next) {
    staticServer
        .use(serveStatic(config.paths.dest.server, {
            'index': ['index.html'],
            fallthrough: false,
            redirect: false
        }))

        .use(function onerror(err, req, res, next) {
            var stream = send(req, config.paths.dest.server + '/index.html');
            stream.pipe(res);
        })
        .listen(process.env.PORT || config.ports.staticServer, next);
});
