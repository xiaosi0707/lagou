'use strict';
angular.module('app').directive('appOther', function () {
    return {
        restrict: 'E',
        repalce: true,
        templateUrl: 'view/template/other.html',
    }
})