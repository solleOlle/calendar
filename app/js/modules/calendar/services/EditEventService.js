'use strict';

var _ = require('lodash');

/** @ngInject */
function EditEventService($uibModal, Moment) {
    var editDetails = function (data, actions) {
        $uibModal.open({
            animation: true,
            templateUrl: 'html/calendar/modals/edit-event-modal',
            resolve: {
                eventDetails: data,
                actionEvents: actions
            },
            /** @ngInject */
            controller: function ($scope, $uibModalInstance, eventDetails, actionEvents) {

                var concatDateTime = function (day, time, offset) {
                    var dayTime = day + ' ' + time;
                    dayTime = new Moment(dayTime, 'YYYY-MM-DD HH');

                    if (offset) {
                        dayTime.add(offset, 'hour');
                    }

                    return new Date(dayTime);
                };

                $scope.submit = function () {
                    $scope.error = '';
                    var start = new Moment($scope.event.startDate);
                    var end = new Moment($scope.event.endDate);
                    var event;

                    if (end.isSameOrBefore(start)) {
                        $scope.error = 'Check your time range';
                        return;
                    }

                    event = {
                        name: $scope.event.name,
                        startDate: start.toISOString(),
                        endDate: end.toISOString()
                    };

                    if (actionEvents && actionEvents.edit) {
                        actionEvents.edit(event);
                    }

                    $scope.close();
                };

                $scope.close = function () {
                    if ($scope.event && $scope.event.cancel) {
                        $scope.event.cancel();
                    }

                    $uibModalInstance.close();
                };

                var init = function () {
                    $scope.event = {
                        startDate: concatDateTime(eventDetails.date.value, eventDetails.hour),
                        endDate: concatDateTime(eventDetails.date.value, eventDetails.hour, 1)
                    };
                };

                init();
            }
        });
    };

    return {
        editDetails: editDetails
    };
}

module.exports = EditEventService;
