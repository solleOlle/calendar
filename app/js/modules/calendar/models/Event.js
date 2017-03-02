'use strict';

var _ = require('lodash');
var Moment = require('moment');

function Event(item) {
    _.assign(this, item);
    this.valueBeforeEdit = _.cloneDeep(item);

    this.isValidTimeRange = function () {
        var start = new Moment(this.startDate);
        var end = new Moment(this.endDate);

        return start.isBefore(end);
    };

    this.cancel = function () {
        this.name = this.valueBeforeEdit.name;
        this.startDate = this.valueBeforeEdit.startDate;
        this.endDate = this.valueBeforeEdit.endDate;
    };

    this.updateClone = function () {
        this.valueBeforeEdit.name = this.name;
        this.valueBeforeEdit.startDate = this.startDate;
        this.valueBeforeEdit.endDate = this.endDate;
    };
}

module.exports = Event;
