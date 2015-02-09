'use strict';

describe('Controller: OrganizationsViewCtrl', function () {

  // load the controller's module
  beforeEach(module('dashboardApp'));

  var OrganizationsViewCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    OrganizationsViewCtrl = $controller('OrganizationsViewCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
