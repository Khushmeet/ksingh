'use strict';

angular.module('ksinghApp')
  .factory('tagService',function($resource){
    return $resource('/api/tags',{},{
      get:{
        method:'GET',
        isArray:true
      }
    });
  });
