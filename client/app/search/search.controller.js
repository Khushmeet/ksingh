'use strict';

angular.module('ksinghApp')
  .controller('SearchCtrl', function ($scope, searchService) {
    searchService.get({tag:'website'},
      function success(response){
        console.log(response);
      },
      function error(error) {
        console.log(error);
      });
  });
