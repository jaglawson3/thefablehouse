'use strict';
(function() {

  class StoryComponent {
    constructor($scope, $http) {
      this.$http = $http;
      this.$scope = $scope;
      this.$scope.message = 'Hello';
      this.$http.get('/app/assets/json/story_tree.json').then(response => {
        this.storyPath = response.data;
      });
    }
  }



  angular.module('theFableHouseApp')
    .component('story', {
      templateUrl: 'app/story/story.html',
      controller: StoryComponent
    });

})();
