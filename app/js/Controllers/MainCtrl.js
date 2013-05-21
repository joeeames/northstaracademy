'use strict';

angular.module('nsa').controller('MainCtrl', function($scope, $location, $q, $templateCache, $http, $compile) {

//  $scope.path = $location.path();
//
//  $scope.$watch(function() { return $location.path(); }, function(path) {
//    $scope.path = path;
//    var templateUrl = '/partials' + path + '.html'
//    $q.when(($templateCache.get(templateUrl) || $http.get(templateUrl, {cache: true}).then(function(res) { return res.data; }))
//      .then(function onSuccess(template) {
//          var mainContent;
//          if(template.substr(0, 15) === '<!doctype html>') {
//            mainContent = $(".main-content").html('<h1>404 error</h1>');
//            $compile(mainContent)($scope);
//          } else {
//
//            mainContent = $(".main-content").html(template);
//            $compile(mainContent)($scope);
//          }
//    }));
//  })

})