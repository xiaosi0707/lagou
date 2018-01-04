/**
 * Created by wyunfei on 2018/1/3.
 */
angular.module('app').value('dict', {}).run(['$http','dict', function ($http, dict) {
    $http.get('../../data/city.json').then(function (res) {
        dict.city = res.data;
    });
    $http.get('../../data/salary.json').then(function (res) {
        dict.salary = res.data;
    });
    $http.get('../../data/scale.json').then(function (res) {
        dict.scale = res.data;
    });
}]);
