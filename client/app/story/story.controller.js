'use strict';
(function() {

  class StoryComponent {
    constructor($scope, $http) {
      this.$http = $http;
      this.$scope = $scope;
      this.$scope.video1 = '../assets/images/chapter1Modified.mp4';
      // this.$scope.video2 = '../assets/images/chapter2.mp4';
      this.$http.get('../assets/images/story_tree.json').then(response => {
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
