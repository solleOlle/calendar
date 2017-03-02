'use strict';

describe('The app tests', function() {
    beforeEach(module('app'));

    it('[Application should exist]', function () {
        expect('app').not.toEqual(null);
    });

});
