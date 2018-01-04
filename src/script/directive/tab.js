/**
 * Created by wyunfei on 2018/1/3.
 */
angular.module('app').directive('appTab', function () {
   return {
       restrict: 'A',
       replace: true,
       scope: {
           tabData: '=',
           tabClick: '&'
       },
       templateUrl: 'view/template/tab.html',
       link:function ($scope) {
           $scope.click = function (tab) {
               // console.log(tab);
               $scope.selectId = tab.id;
               $scope.tabClick(tab);
           }
       }
   }
});
