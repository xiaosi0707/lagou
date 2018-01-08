'use strict';
angular.module('app').directive('appList', function () {
    return {
        restrict: 'A',
        repalce: true,
        templateUrl: 'view/template/list.html',
    }
})