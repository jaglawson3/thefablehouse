'use strict';
(function() {

  class StoryComponent {
    constructor($scope, $http) {
      this.$http = $http;
      this.$scope = $scope;
      this.$scope.message = 'Hello';
      this.$scope.chapter1 = "assets/images/chapter1.mp4"
      this.$http.get('assets/images/story_tree.json').then(response => {
        console.log(response);
        this.$scope.storyPath = response.data;
      });

    }
  }

  angular.module('theFableHouseApp')
    .component('story', {
      templateUrl: 'app/story/story.html',
      controller: StoryComponent
    });

})();
