/**
 * Created by wyunfei on 2018/1/4.
 */
'use strict';
angular.module('app').controller('Register', ['$scope', '$http', '$interval', function ($scope, $http, $interval) {
    $scope.submit = function () {
        console.log($scope.user);
    };

    $scope.send = function () {
        $scope.time = '60s';
        var count = 60;
        $http.get('../../data/code.json').then(function (res) {
            if (res.data.state === 1) {
                var interval = $interval(function () {
                    if (count <= 0) {
                        $interval.cancel(interval);
                        $scope.time = '';
                        return;
                    }
                    count -- ;
                    $scope.time = count + 's';
                }, 1000)
            }
        })
    }
}]);
