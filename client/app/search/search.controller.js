'use strict';

angular.module('ksinghApp')
  .controller('SearchCtrl', function ($scope, searchService) {
    var text = $scope.searchText;
    searchService.get({text},
      function success(response){
        console.log(response);
      },
      function error(error){
        console.log(error);
      });
  });
