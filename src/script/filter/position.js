/**
 * Created by wyunfei on 2018/1/3.
 */
'use strict';
angular.module('app').filter('filterPosition', function () {
    return function (list, obj) {
        console.log(obj);
        var result = [];
        // console.log(list,obj);
        angular.forEach(list, function (item) {
            var isEqual = true;
            for(var e in obj) {
                if (item[e] !== obj[e]) {
                    isEqual = false;
                }
            }
            if (isEqual) {
                result.push(item);
            }
        });
        return result;
    }
});
