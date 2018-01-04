/**
 * Created by wyunfei on 2018/1/3.
 */
angular.module('app').directive('appSheet', function () {
    return {
        restrict: 'A',
        replace: true,
        scope: {
            list: '=',
            visible: '=',
            select: '&'
        },
        templateUrl: 'view/template/sheet.html',
    }
});