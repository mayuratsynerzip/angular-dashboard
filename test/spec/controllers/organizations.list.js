'use strict';

describe('Controller: OrganizationsListCtrl', function () {

  // load the controller's module
  beforeEach(module('dashboardApp'));

  var OrganizationsListCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    OrganizationsListCtrl = $controller('OrganizationsListCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
