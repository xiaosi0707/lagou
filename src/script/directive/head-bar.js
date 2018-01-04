/**
 * Created by wyunfei on 2017/12/28.
 */
'use strict';

angular.module('app').directive('appHeadBar', function () {
   return {
       restrict: 'A',
       replace: true,
       templateUrl: 'view/template/head-bar.html',
       scope: {
           'title': '@'
       },
       link: function (scope) {
           scope.back = function () {
               window.history.back();
           };
           // 接收父广播的内容
           scope.$on('abc', function (event, data) {
              console.log(event, data);
           });
           // 向上广播
           scope.$emit('cba', {name: 2});
       }
   }
});
