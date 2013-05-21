'use strict';


// Declare app level module which depends on filters, and services
angular.module('nsa', []).
  config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
//    $routeProvider.when('/', {templateUrl: 'partials/Main.html', controller: 'MainCtrl'});
//    $routeProvider.when('/blah', {templateUrl: 'partials/Main.html', controller: 'MainCtrl'});
//    $routeProvider.otherwise({redirectTo: '/'});
    $locationProvider.html5Mode(true);
  }]);
