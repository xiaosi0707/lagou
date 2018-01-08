/**
 * Created by wyunfei on 2017/12/29.
 */
'use strict';

angular.module('app').controller('positionCtrl',['$q',  '$scope', '$state', '$http', 'cache', function ($q, $scope, $state, $http, cache) {
    $scope.isLogin = false;
    $scope.isLogin = cache.get('name');
    $scope.sendMsg = '投个简历';
    // console.log($state);
    $http.get('../data/position.json').then(function (res) {
       var id = $state.params.id;
       $scope.position = res.data[id];
    });
    // function getPosition() {
    //   var def = $q.defer();
    //     $http.get('../../data/position.json?id=' + $state.params.id).then(function (res) {
    //         $scope.position = res.data;
    //         def.resolve(res);
    //     });
    //     return def.promise;
    // };
    //
    // function getCompany() {
    //     $http.get('../../data/company.json?id=' + id).then(function (res) {
    //         $scope.company = res.data;
    //         def.resolve(res);
    //     });
    // }
    //
    // getPosition().then(function (obj) {
    //     console.log(obj);
    // },function () {
    //
    // });

    $scope.go = function () {
            alert('投递成功！');
        $scope.sendMsg = '已投递';
    }

}]);