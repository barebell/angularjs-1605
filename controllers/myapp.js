
var myApp = angular.module('myApp', [
    'ngRoute',
    'myAppControllers'

]);


myApp.config(['$routeProvider', '$locationProvider',
    function($routeProvider, $locationProvider) {
        $routeProvider

        .when('/', {
            templateUrl: 'views/main.html',
            controller: 'mainCtrl'
        })
        .when('/home', {
            templateUrl: 'views/main.html',
            controller: 'mainCtrl'
        })
        .when('/pro1', {
            templateUrl: 'views/pro1.html',
            controller: 'pro1Ctrl'
        })
        .when('/pro2',{
            templateUrl: 'views/pro2.html',
            controller: 'pro2Ctrl'
        });

        $locationProvider.html5Mode(false).hashPrefix('!');
    }]);
/**
 * Created by air on 16/5/5.
 */
