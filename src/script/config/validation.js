/**
 * Created by wyunfei on 2018/1/4.
 */
'use strict';
angular.module('app').config(['$validationProvider', function ($validationProvider) {
    var expression = {
        phone: /^1[\d]{10}$/,
        password: function(val) {
            var str = val + '';
            return str.length > 5;
        },
        required: function (val) {
            return !!val;
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
        },
        required: {
            success: '',
            error: '不能为空'
    }
    };
    $validationProvider.setExpression(expression).setDefaultMsg(defaultMsg);
}]);
