'use strict';

angular.module('ksinghApp.auth', [
  'ksinghApp.constants',
  'ksinghApp.util',
  'ngCookies',
  'ui.router'
])
  .config(function($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
  });
