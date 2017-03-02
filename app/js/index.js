'use strict';
require('angular');
require('angular-ui-router');
require('angular-animate');
require('angular-sanitize');
require('angular-bootstrap');

angular
    .module('app', [
        'ui.router',
        'ngAnimate',
        'ngSanitize',
        'ui.bootstrap',

        require('app-templates').name,
        require('./modules/routing').name,
        require('./modules/calendar').name

    ])
    .constant('Moment', require('moment'));

