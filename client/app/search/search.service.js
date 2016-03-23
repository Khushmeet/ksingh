'use strict';

angular.module('ksinghApp')
  .factory('searchService',function($resource){
    return $resource('/api/articles',{},{
      get:{
        method:'GET',
        isArray:true
      }
    });
  });
