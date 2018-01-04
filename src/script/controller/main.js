/**
 * Created by wyunfei on 2017/12/28.
 */
'use strict';

angular.module('app').controller('mainCtrl',['$scope', '$http', 'cache', function ($scope, $http, cache) {
    cache.put('wyunfei', 'hi');
    $http.get('../../data/positionList.json').then(function (res) {
        $scope.list = res.data;
    });
}]);
