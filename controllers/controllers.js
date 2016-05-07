/**
 * Created by air on 16/5/6.
 */
var myAppControllers = angular.module('myAppControllers', []);



myAppControllers.controller('myAppCtrl', ['$scope', '$location', '$http',
    function myAppCtrl($scope, $location, $http) {
        $scope.message = "Hello World";
    }]);

myAppControllers.controller('pro1Ctrl', ['$scope', '$location', '$http',
    function pro1Ctrl($scope, $location, $http) {
        $scope.message = "Show The World";
    }]);
myAppControllers.controller('pro2Ctrl', ['$scope', '$location', '$http',
    function pro2Ctrl($scope, $location, $http) {
        $scope.message = "Show The World!";
    }]);
myAppControllers.controller('mainCtrl', ['$scope', '$location', '$http',
    function mainCtrl($scope, $location, $http) {
        $scope.message = "Show The World";
    }]);