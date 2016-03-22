'use strict';
(function() {

  class StoryComponent {
    constructor($scope, $http) {
      this.$scope = $scope;
      var scope = this.$scope;
      this.$http = $http;
      this.$scope.Introduction = true;
      // this.$scope.video1 = '../assets/images/chapter1Modified.mp4';
      this.$http.get('assets/images/story_tree.json').then(response => {
        console.log(response);
        // this.$scope.storyPath = response.data;
        // this.$scope.ch1Text = this.$scope.storyPath["0"].text;
        // this.$scope.ch1Question = this.$scope.storyPath["0"]["0"].text;
        // this.$scope.ch1Choice1 = this.$scope.storyPath["0"]["0"].button1;
        // this.$scope.ch1Choice2 = this.$scope.storyPath["0"]["0"].button2;
        // this.$scope.ch2Text = this.$scope.storyPath["0"]["0"]["0"].text;
        // console.log(this.$scope.ch1Text);
        this.$scope.currentPage = response.data;
        console.log($scope.currentPage);
      });
      scope.currentPage = {
        currentLocation: " ",
        src: '',
        text : " ",
        currentQuestion: " ",
        buttonLeft: " ",
        buttonRight: " ",
        optionLeft: { },
        optionRight: { }
      };
      this.$scope.videoUrl = function (src) {
        var source = 'assets/images/' + src;
        console.log(src);
        return source;
      }
      this.$scope.optionLeft = function () {
        scope.currentPage= scope.currentPage["optionLeft"];
        if (scope.currentPage.end) {
          scope.end = true;
        }
        // this.$scope.currentPage.text = this.$scope.storyPath["0"]["0"]["0"].text;
      }
      this.$scope.optionRight = function () {
        scope.currentPage = scope.currentPage["optionRight"];
        if (scope.currentPage.end) {
          scope.end = true;
        }
        // this.$scope.currentPage.text = this.$scope.storyPath["0"]["0"]["0"].text;
      }
      this.$scope.isItIntroduction = function () {
        scope.currentPage = scope.currentPage["0"];
        scope.Introduction = false;
        console.log(scope.Introduction);
      }

    }
  }



  angular.module('theFableHouseApp')
    .component('story', {
      templateUrl: 'app/story/story.html',
      controller: StoryComponent
    })
    .directive('video', function () {
      return {
        restrict: 'E',
        link: function(scope, element) {
          scope.$on('$destroy', function() {
            element.prop('src', '');
          });
        }
      }
    })

})();
