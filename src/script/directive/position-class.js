/**
 * Created by wyunfei on 2017/12/28.
 */
'use strict';

angular.module('app').directive('appPositionClass', function () {
   return {
       restrict: 'A',
       replace: true,
       scope: {
           comPosition: '='
       },
       templateUrl: 'view/template/position-class.html',
       link:function ($scope) {
           console.log($scope);
           $scope.showPositionInfo = function (idx) {
               $scope.positionList = $scope.comPosition.positionClass[idx].positionList;
               $scope.isActive = idx;
           };
           $scope.$watch('comPosition', function(newVal, oldVal, scope) {
               if (newVal) $scope.showPositionInfo(0);
           })

       }

   }
});
