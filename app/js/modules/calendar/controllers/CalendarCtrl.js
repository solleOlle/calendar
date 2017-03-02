'use strict';

var _ = require('lodash');

/** @ngInject */
function CalendarCtrl($scope, $state, $stateParams, MockEventDataService, RangeGenerator, EventConverter, Moment) {
    $scope.currentMode = +$stateParams.mode || 7;

    if ($scope.currentMode !== 1 && $scope.currentMode !== 4) {
        $scope.currentMode = 7;
    }

    if ($stateParams.start) {
        $scope.startDate = new Moment($stateParams.start);
    } else {
        $scope.startDate = new Moment();
    }

    var changeUrlParams = function (params, isSilent) {
        var param = {};
        var options = {};

        param.mode = params.mode || $scope.currentMode;
        param.start = params.start || $scope.startDate.format('YYYY-MM-DD');

        if (isSilent) {
            options.notify = false;
        }

        $state.go('.', param, options);
    };

    var updateStates = function (date) {
        if (!date || !date.value) {
            return;
        }

        $scope.startDate = new Moment(date.value);
        changeUrlParams({start: date.value}, true);
    };

    $scope.changeViewMode = function (mode) {
        if (mode !== 1 && mode !== 4) {
            mode = 7;
        }

        changeUrlParams({mode: mode});
    };

    $scope.getToday = function () {
        var today = new Moment().format('YYYY-MM-DD');
        $scope.days = RangeGenerator.getCurrentDateRange(today, $scope.currentMode);
        changeUrlParams({start: _.first($scope.days).value}, true);
    };

    $scope.goToNextRange = function () {
        var lastDay = _.last($scope.days).value;
        $scope.days = RangeGenerator.getNextStepRange(lastDay, $scope.currentMode, 1);
        updateStates(_.first($scope.days));
    };

    $scope.goToPreviousRange = function () {
        var firstDay = _.first($scope.days).value;
        $scope.days = RangeGenerator.getNextStepRange(firstDay, $scope.currentMode, -$scope.currentMode);
        updateStates(_.first($scope.days));
    };

    $scope.editEvent = function (event) {
        EventConverter.separateEventByDays(event, $scope.dataEvents);
    };

    var init = function () {
        var hours = _.range(24);
        $scope.hours = _.map(hours, function(hour) {
            return new Moment(hour, 'HH').format('hh:mm a');
        });
        $scope.days = RangeGenerator.getCurrentDateRange($scope.startDate, $scope.currentMode);
        $scope.dataEvents = EventConverter.modifyEventFromServer(MockEventDataService.events.get());
    };

    init();
}

module.exports = CalendarCtrl;

