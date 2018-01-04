/**
 * Created by wyunfei on 2017/12/29.
 */
'use strict';

angular.module('app').controller('positionCtrl',['$q',  '$scope', '$state', '$http', function ($q, $scope, $state, $http) {
    $scope.isLogin = false;
    // console.log($state);
    function getPosition() {
      var def = $q.defer();
        $http.get('../../data/position.json?id=' + $state.params.id).then(function (res) {
            $scope.position = res.data;
            def.resolve(res);
        });
        return def.promise;
    };

    function getCompany() {
        $http.get('../../data/company.json?id=' + id).then(function (res) {
            $scope.company = res.data;
            def.resolve(res);
        });
    }
    
    getPosition().then(function (obj) {
        console.log(obj);
    },function () {
        
    })

}]);