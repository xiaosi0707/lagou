/**
 * Created by wyunfei on 2017/12/28.
 */
'use strict';

angular.module('app').controller('companyCtrl',['$scope', '$http', '$state', function ($scope, $http, $state) {
    $http.get('../../data/company.json').then(function (res) {
        var id = $state.params.id;
        $scope.company = res.data[id];
        // 向下广播
        $scope.$broadcast('abc', {id: 1});
    });
    // 接收向上广播
    $scope.$on('cba', function (event, data) {
        console.log(event, data);
    });
}]);
