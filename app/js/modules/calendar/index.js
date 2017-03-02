'use strict';

var ngModule = angular.module('app.calendar', []);

ngModule.factory('EventModel', function () {
    return require('./models/Event');
});

ngModule.service('MockEventDataService', require('./services/MockEventDataService'));
ngModule.service('EventConverter', require('./services/EventConverter'));
ngModule.service('EditEventService', require('./services/EditEventService'));
ngModule.service('RangeGenerator', require('./services/RangeGenerator'));

ngModule.filter('setEventStyle', require('./filters/SetEventStyle'));

ngModule.directive('dayContainer', require('./directives/DayContainer'));

ngModule.controller('CalendarCtrl', require('./controllers/CalendarCtrl'));

module.exports = ngModule;
