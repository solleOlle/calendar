'use strict';

/** @ngInject */
function routingConfig($stateProvider, $locationProvider) {

    $stateProvider
        .state('home', {
            url: '/?mode&start',
            templateUrl: 'html/calendar/index',
            controller: 'CalendarCtrl'
        });

    $locationProvider.html5Mode(true);
}

module.exports = routingConfig;
