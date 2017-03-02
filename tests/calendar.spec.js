'use strict';

describe('The calendar tests', function () {
    var rootScope, controller, state, stateParams, mockEventDataService, rangeGenerator, eventConverter, moment;

    beforeEach(function () {
        module('app');

        inject(function ($rootScope,
                         $controller,
                         $state,
                         $stateParams,
                         MockEventDataService,
                         RangeGenerator,
                         EventConverter,
                         Moment) {

            rootScope = $rootScope;
            controller = $controller;
            state = $state;
            stateParams = $stateParams;
            mockEventDataService = MockEventDataService;
            rangeGenerator = RangeGenerator;
            eventConverter = EventConverter;
            moment = Moment;
        });
    });

    var getCtrl = function () {
        var scope = rootScope.$new();

        var ctrl = controller('CalendarCtrl', {
            $scope: scope,
            $state: state,
            $stateParams: stateParams,
            MockEventDataService: mockEventDataService,
            RangeGenerator: rangeGenerator,
            EventConverter: eventConverter,
            Moment: moment
        });

        return {
            ctrl: ctrl,
            scope: scope
        };
    };

    it('[CalendarCtrl controller should exist]', function () {
        expect('app.calendar.CalendarCtrl').not.toEqual(null);
    });

    it('[CalendarCtrl should has mode. Days counter', function () {
        var ctrl = getCtrl();
        expect(ctrl.scope.currentMode).toBeGreaterThan(0);
        expect(ctrl.scope.currentMode).toEqual(jasmine.any(Number));
    });

    it('[CalendarCtrl should has some hours]', function () {
        var ctrl = getCtrl();
        expect(ctrl.scope.hours).toEqual(jasmine.any(Object));
    });
});
