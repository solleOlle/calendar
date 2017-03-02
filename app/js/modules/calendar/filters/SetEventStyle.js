'use strict';

var _ = require('lodash');

/** @ngInject */
function SetEventStyleFilter(Moment) {
    return function (event, events, date) {
        var currentDate = new Moment(date);
        var startDate = new Moment(event.startDate);
        var endDate = new Moment(event.endDate);
        var startTimeDuration = new Moment.duration(startDate.format('HH:mm')).asMinutes();
        var endTimeDuration = new Moment.duration(endDate.format('HH:mm')).asMinutes();
        var overlaps = 1;
        var sibling = 0;
        var hourCellHeight = 62;
        var headerCellHeight = 32;

        var isOneDayEvent = function () {
            return startDate.isSame(endDate, 'day');
        };

        var calculateEventOverlaps = function () {
            _(events).forEach(function (item) {
                var itemStartDate = new Moment(item.startDate);
                var itemEndDate = new Moment(item.endDate);

                if (startDate.isBetween(itemStartDate, itemEndDate)) {
                    overlaps += 1;
                    sibling += 1;
                } else if (endDate.isBetween(itemStartDate, itemEndDate) ||
                    itemStartDate.isBetween(startDate, endDate) || itemEndDate.isBetween(startDate, endDate)) {
                    overlaps += 1;
                }
            });
        };

        var calculateTopValue = function () {
            if (isOneDayEvent() || currentDate.isSame(startDate, 'day')) {
                return hourCellHeight / 60 * startTimeDuration + headerCellHeight;
            }

            return headerCellHeight;
        };

        var calculateHeightValue = function () {
            if (isOneDayEvent()) {
                return endTimeDuration - startTimeDuration;
            } else if (currentDate.isSame(startDate, 'day')) {
                return hourCellHeight * 24 - hourCellHeight * startTimeDuration / 60 - 2;
            } else if (currentDate.isSame(endDate, 'day')) {
                return hourCellHeight * endTimeDuration / 60 - 2;
            }

            return hourCellHeight * 24 - 2;
        };


        calculateEventOverlaps();

        return {
            top: calculateTopValue() + 'px',
            height: calculateHeightValue() + 'px',
            width: (100 - 5) / overlaps + '%',
            left: (100 - 5) / overlaps * sibling + '%'
        };
    };
}

module.exports = SetEventStyleFilter;
