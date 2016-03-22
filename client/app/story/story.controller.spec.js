'use strict';

describe('Component: StoryComponent', function () {

  // load the controller's module
  beforeEach(module('theFableHouseApp'));

  var StoryComponent, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController, $rootScope) {
    scope = $rootScope.$new();
    StoryComponent = $componentController('StoryComponent', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
