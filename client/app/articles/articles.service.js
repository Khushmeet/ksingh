'use strict';

angular.module('ksinghApp')
  .factory('articleService',function($resource){
    return $resource('/api/articles',{},{
      get:{
        method:'GET',
        isArray:true
      }
    });
  });
