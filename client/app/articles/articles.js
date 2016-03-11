'use strict';

angular.module('ksinghApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('articles', {
        url: '/articles',
        templateUrl: 'app/articles/articles.html',
        controller: 'ArticlesCtrl',
        controllerAs:'articles'
      });
  });
