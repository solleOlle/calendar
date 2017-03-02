'use strict';

var _ = require('lodash');

/** @ngInject */
function DayContainerDirective(EditEventService) {
    return {
        restrict: 'AE',
        scope: {
            events: '=',
            date: '=',
            editHandler: '&edit'
        },
        templateUrl: 'html/calendar/directives/day-container',
        controller: /** @ngInject */ function ($scope) {
            $scope.hours = _.range(24);

            var edit = function (event) {
                var editHandler = $scope.editHandler();

                if (!editHandler) {
                    return;
                }

                editHandler(event);
            };

            $scope.createEvent = function (hour) {
                EditEventService.editDetails({hour: hour, date: $scope.date}, {edit: edit});
            };
        }
    };
}

module.exports = DayContainerDirective;


