'use strict';

angular.module('nsa').directive('nsaContent', function() {

  var ContentCtrl = function($scope, $element, $q, $templateCache, $http, $compile, $location, $timeout) {

    $scope.path = $location.path();

//    $scope.watchPath = function() {
      $scope.$watch(function() { return $location.path(); }, function(path) {
//        console.log('watching - ' + $location.path());
        $scope.path = path;
        var templateUrl = '/partials' + path + '.html'
        $q.when(($templateCache.get(templateUrl) || $http.get(templateUrl, {cache: true}).then(function(res) { return res.data; }))
            .then(function onSuccess(template) {
              var mainContent;
              if(template.substr(0, 15) === '<!doctype html>') {
                mainContent = $(".main-content").html('<h1>404 error</h1>');
//                $timeout(function() {
//                  $compile(mainContent)($scope);
//                });
              } else {

                mainContent = $(".main-content").html(template);
//                $compile(mainContent)($scope);
              }
            }));
      });

//    }
  }

  return {
    restrict: 'A',
    controller: ContentCtrl,
    link: function(scope, element, attrs, controller) {
//      console.log('here');
//      scope.watchPath();
    }
  }
})