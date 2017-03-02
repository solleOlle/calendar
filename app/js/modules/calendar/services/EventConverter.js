'use strict';

var _ = require('lodash');

/** @ngInject */
function EventConverter(EventModel, Moment) {

    var putEvent = function (event, date, store) {
        if (!date) {
            return;
        }

        if (!store[date]) {
            store[date] = [];
        }

        store[date].push(new EventModel(event));
    };

    var separateEventByDays = function (event, store) {
        var start = new Moment(event.startDate);
        var end = new Moment(event.endDate);

        if (start.isSame(end, 'day')) {
            putEvent(event, start.format('YYYY-MM-DD'), store);
        } else {
            while (!start.isSame(end, 'day')) {
                putEvent(event, start.format('YYYY-MM-DD'), store);
                start.add(1, 'day');
            }

            putEvent(event, start.format('YYYY-MM-DD'), store);
        }
    };

    var modifyEventFromServer = function (data) {
        var result = {};

        if (_.isEmpty(data)) {
            return result;
        }

        _(data).forEach(function (event) {
            separateEventByDays(event, result);
        });

        return result;
    };

    return {
        modifyEventFromServer: modifyEventFromServer,
        separateEventByDays: separateEventByDays
    };
}

module.exports = EventConverter;
