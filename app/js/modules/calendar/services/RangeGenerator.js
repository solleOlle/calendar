'use strict';

/** @ngInject */
function RangeGenerator(Moment) {
    var displayFormat = 'ddd, MM/DD';

    var getRange = function (dateFrom, count) {
        var result = [];
        var day;

        if (!dateFrom || !count) {
            return result;
        }

        for (var i = 0; i < count; i++) {
            day = new Moment(dateFrom).add(i, 'day');

            result.push({label: day.format(displayFormat), value: day.format('YYYY-MM-DD')});
        }

        return result;
    };

    var getCurrentDateRange = function (dateFrom, mode) {
        dateFrom = dateFrom || new Moment().format('YYYY-MM-DD');

        var startDate = new Moment(dateFrom);
        var result = [];

        switch (mode) {
            case 1:
                result.push({label: startDate.format(displayFormat), value: startDate.format('YYYY-MM-DD')});
                break;
            case 4:
                result = getRange(startDate.format('YYYY-MM-DD'), 4);
                break;
            default:
                startDate = startDate.startOf('week');
                result = getRange(startDate.format('YYYY-MM-DD'), 7);
        }

        return result;
    };

    var getNextStepRange = function (date, mode, offset) {
        offset = offset || 1;

        if (date) {
            date = new Moment(date).add(offset, 'day').format('YYYY-MM-DD');
        }

        return getCurrentDateRange(date, mode);
    };

    return {
        getCurrentDateRange: getCurrentDateRange,
        getNextStepRange: getNextStepRange,
        displayFormat: displayFormat
    };
}

module.exports = RangeGenerator;
