'use strict';

angular.module('ksinghApp', [
  'ksinghApp.auth',
  'ksinghApp.admin',
  'ksinghApp.constants',
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'btford.socket-io',
  'ui.router',
  'ngMaterial',
  'ngMessages',
  'ui.bootstrap',
  'validation.match'
])
  .config(function($stateProvider, $urlRouterProvider, $locationProvider) {
    $urlRouterProvider
      .otherwise('/');

    $locationProvider.html5Mode(true);
  });
