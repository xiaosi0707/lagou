/**
 * Created by wyunfei on 2018/1/4.
 */
'use strict';
angular.module('app').controller('Me', ['$scope', 'cache', '$state', function ($scope, cache, $state) {
    console.log(cache.get('name'));
    if (cache.get('name')) {
        $scope.name = cache.get('name');
        $scope.image = cache.get('image');
    }
    $scope.logout = function () {
        cache.remove('id');
        cache.remove('name');
        cache.remove('image');
        $state.go('main');
    }
}]);
