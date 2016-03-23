'use strict';

angular.module('ksinghApp')
  .factory('searchService',function($resource,$scope){
    return $resource('/api/articles',{tags:[]},{
      get:{
        method:'GET',
        isArray:true
      }
    });
  });
