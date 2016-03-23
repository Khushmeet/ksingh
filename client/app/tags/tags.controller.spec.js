'use strict';

describe('Controller: TagsCtrl', function () {

  // load the controller's module
  beforeEach(module('ksinghApp'));

  var TagsCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    TagsCtrl = $controller('TagsCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
