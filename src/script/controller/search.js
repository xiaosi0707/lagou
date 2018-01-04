/**
 * Created by wyunfei on 2018/1/3.
 */
angular.module('app').controller('searchCtrl', ['$scope', '$http', 'dict', function ($scope, $http, dict) {
    $scope.name = '';
    $scope.search = function () {
        $http.get('../../data/positionList.json?name = ' + $scope.name).then(function (res) {
            $scope.list = res.data;
        });
    };
    $scope.search();
    $scope.sheet = {};
    $scope.tabList = [
        {
            id: 'city',
            name: '城市'
        },
        {
            id: 'salary',
            name: '薪资'
        },
        {
            id: 'scale',
            name: '公司规模'
        }
    ];
    $scope.filterObj = {};
    var tabId = '';
    $scope.tClick = function (id, name) {
        // console.log(id, name);
        tabId = id;
        $scope.sheet.list = dict[id];
        $scope.sheet.visible = true;
    };
    
    $scope.sClick = function (id ,name) {
        // console.log(id,name);
        if (id) {
            angular.forEach($scope.tabList, function (item) {
               // console.log(item);
               if (item.id === tabId) {
                    item.name = name
               }
            });
            console.log(tabId + 'Id' + id);
            $scope.filterObj[tabId + 'Id'] = id;
        } else {
            delete $scope.filterObj[tabId + 'Id'];
            angular.forEach($scope.tabList, function (item) {
                if (item.id === tabId) {
                    if(item.id === 'city') {
                        item.name = '城市'
                    } else if (item.id === 'salary') {
                        item.name = '薪资'
                    } else {
                        item.name = '公司规模'
                    }
                }
            });
        }

    };

}]);