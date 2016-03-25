'use strict';

angular.module('ksinghApp')
  .controller('SearchCtrl', function($scope, searchService) {
    $scope.show = undefined;
    $scope.search = function(form,text) {
      if (form.$valid) {
        $scope.show = text;
        searchService.get({
            tag: text
          },
          function success(response) {
            console.log(response);
            $scope.list = response;
          },
          function error(error) {
            console.log(error);
          });
      }
    };
  });
