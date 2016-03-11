'use strict';

angular.module('ksinghApp')
  .controller('ArticlesCtrl', function ($scope,articleService) {
    articleService.get({},
      function success(response) {
        console.log(response);
        $scope.articles = response;
      },
      function error(error){
        console.log(error);
      });
  });
