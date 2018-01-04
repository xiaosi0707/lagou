/**
 * Created by wyunfei on 2018/1/4.
 */
'use strict';
angular.module('app').controller('Post', ['$scope', function ($scope) {
    $scope.tabList = [
        {
            id: 'all',
            name: '全部'
        },
        {
            id: 'pass',
            name: '面试邀请'
        },
        {
            id: 'fail',
            name: '不合适'
        }
    ]
}]);
