/**
 * Created by wyunfei on 2018/1/4.
 */
'use strict';
angular.module('app').controller('Login', ['$scope', '$http', '$state', 'cache', function ($scope, $http, $state, cache) {
    $scope.submit = function () {
        $http.get('../../data/login.json').success(function (res) {
            console.log(res);
            cache.put('id', res.id);
            cache.put('name', res.name);
            cache.put('image', res.image);
            $state.go('main');
        })
    }
}]);
