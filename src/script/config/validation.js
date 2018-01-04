/**
 * Created by wyunfei on 2018/1/4.
 */
'use strict';
angular.module('app').config(['$validationProvider', function ($validationProvider) {
    var expression = {
        phone: /^1[\d]{10}/,
        password: function(val) {
            var str = val + '';
            return str.length > 5;
        }
    };
    var defaultMsg = {
        phone: {
            success: '',
            error: '手机号必须是11位'
        },
        password: {
            success: '',
            error: '长度至少6位'
        }
    };
    $validationProvider.setExpression(expression).setDefaultMsg(defaultMsg);
}]);
