'use strict';

(function() {

class MainController {

  constructor($scope, $rootScope, socket, tagService) {
    $scope.$on('$destroy', function() {
      socket.unsyncUpdates('thing');
    });

    tagService.get({},
      function success(response){
        console.log(response);
        $scope.tags = response;
      },
      function error(error){
        console.log(error);
      });
  }
}

angular.module('ksinghApp')
  .controller('MainController', MainController);

})();
