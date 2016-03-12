'use strict';

angular.module('ksinghApp')
  .controller('ArticleCtrl', function ($scope,singleArticleService,$stateParams) {
    singleArticleService.get({id:$stateParams.id},
      function success(response) {
        console.log(response);
        $scope.article = response;
      },
      function error(error) {
        console.log(error);
      });
  });
