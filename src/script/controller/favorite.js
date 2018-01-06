/**
 * Created by wyunfei on 2018/1/4.
 */
'use strict';
angular.module('app').controller('Favorite', ['$scope', '$http', function ($scope, $http) {
    $http.get('../../data/myFavorite.json').then(function (res) {
        console.log(res);
        $scope.list = res.data;
    })
}]);
