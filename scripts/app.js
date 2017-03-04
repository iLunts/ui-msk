'use strict';

var app = angular.module('site', ['ngRoute', 'uiGmapgoogle-maps']);

app.config(['$locationProvider', '$routeProvider', function($locationProvider, routeProvider) {
    // $locationProvider.html5Mode({
    //     enabled: true,
    //     requireBase: false,
    //     rewriteLinks: true
    // });
}]);

app.config(["$routeProvider", function($routeProvider) {
    $routeProvider.otherwise({
        redirectTo: "/"
    });
}]);
