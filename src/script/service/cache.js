/**
 * Created by wyunfei on 2018/1/3.
 */

// service写法
angular.module('app').service('cache', ['$cookies', function ($cookies) {
    this.put = function (key, val) {
        $cookies.put(key, val);
    };
    this.get = function (key) {
        return $cookies.get(key);
    };
    this.remove = function (key) {
        $cookies.remove(key);
    }
}]);

// // factory写法
// angular.module('app').factory('cache', function () {
//    return {
//        put: function (key, val) {
//            $cookies.put(key, val);
//        },
//        get: function (key) {
//            return $cookies.get(get);
//        },
//        remove: function (key) {
//            $cookies.remove(key);
//        }
//    }
// });