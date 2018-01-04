/**
 * Created by wyunfei on 2017/12/28.
 */
angular.module('app').config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
    $stateProvider.state('main', {
        url: '/main',
        templateUrl: 'view/main.html'
    })
        .state('position', {
            url: '/position/:id',
            templateUrl: 'view/position.html'
        })
        .state('company', {
            url: '/company',
            templateUrl: 'view/company.html'
        })
        .state('search', {
            url: '/search',
            templateUrl: 'view/search.html'
        })
        .state('register', {
            url: '/register',
            templateUrl: 'view/register.html'
        })
        .state('login', {
            url: '/login',
            templateUrl: 'view/login.html'
        })
        .state('favorite', {
            url: '/favorite',
            templateUrl: 'view/favorite.html'
        })
        .state('me', {
            url: '/me',
            templateUrl: 'view/me.html'
        })
        .state('post', {
            url: '/post',
            templateUrl: 'view/post.html'
        });
    $urlRouterProvider.otherwise('main');
}])
