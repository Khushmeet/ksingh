'use strict';

angular.module('ksinghApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('tags', {
        url: '/tags',
        templateUrl: 'app/tags/tags.html',
        controller: 'TagsCtrl'
      });
  });
