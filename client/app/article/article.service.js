'use strict';

angular.module('ksinghApp')
  .factory('singleArticleService',function($resource){
    return $resource('/api/articles/:id',{id:'@_id'},{
      get:{
        method:'GET',
        isArray:false
      }
    });
  });
