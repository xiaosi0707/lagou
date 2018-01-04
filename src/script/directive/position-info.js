/**
 * Created by wyunfei on 2017/12/28.
 */
'use strict';

angular.module('app').directive('appPositionInfo', function () {
    return {
        restrict: 'A',
        replace: true,
        scope: {
            isActive: '=',
            isLogin: '=',
            position: '='
        },
        templateUrl: 'view/template/position-info.html',
        link: function (scope) {
            console.log(scope);
            scope.imgPath = scope.isActive ? 'imgs/star.png' : 'imgs/star.png';
        }
    }
});