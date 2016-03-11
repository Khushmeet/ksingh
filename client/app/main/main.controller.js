'use strict';

(function() {

class MainController {

  constructor( $scope, socket) {
    $scope.$on('$destroy', function() {
      socket.unsyncUpdates('thing');
    });
  }
}

angular.module('ksinghApp')
  .controller('MainController', MainController);

})();
