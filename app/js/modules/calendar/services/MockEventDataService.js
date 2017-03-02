'use strict';

/** @ngInject */
function MockEventDataService() {
    var provider = {};

    var eventList = [{
        id: 4213,
        name: 'Karl\'s birthday',
        startDate: '2017-03-03T06:00:00.000Z',
        endDate: '2017-03-03T11:30:00.000Z'
    }, {
        id: 4214,
        name: 'Buy flowers',
        startDate: '2017-03-03T11:00:00.000Z',
        endDate: '2017-03-03T12:00:00.000Z'
    }, {
        id: 4215,
        name: 'My lovely trip',
        startDate: '2017-03-06T06:00:00.000Z',
        endDate: '2017-03-09T19:00:00.000Z'
    }, {
        id: 4215,
        name: 'Haircut',
        startDate: '2017-03-02T15:00:00.000Z',
        endDate: '2017-03-02T16:00:00.000Z'
    }];

    provider.events = {
        get: function () {
            return eventList;
        }
    };

    return provider;
}

module.exports = MockEventDataService;
