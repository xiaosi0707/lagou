/**
 * Created by wyunfei on 2017/12/28.
 */
'use strict';

angular.module('app').directive('appCompany', function () {
    return {
        restrict: 'A',
        replace: true,
        scope: {
            company: '='
        },
        templateUrl: 'view/template/company.html'
    }
});