/**
 * Created by wyunfei on 2017/12/28.
 */
'use strict';

angular.module('app').directive('appPositionList', function () {
    return {
        restrict: 'A',
        replace: true,
        templateUrl: 'view/template/position-list.html',
        scope: {
            data: '=',
            filterObj: '='
        }
    }
});