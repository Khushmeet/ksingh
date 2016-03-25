'use strict';

angular.module('ksinghApp')
  .factory('searchService',function($resource){
    return $resource('/api/articles/tags/:tag',{tag:'@tags'},{
      get:{
        method:'GET',
        isArray:true
      }
    });
  });
