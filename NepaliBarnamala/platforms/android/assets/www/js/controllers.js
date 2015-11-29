angular.module('starter.controllers', [])

.controller('MainCtrl', function ($scope, $state) {
    $scope.startIntro = function () {
        $state.go('intro');
    }
})

.controller('IntroCtrl', function ($scope, $state, $ionicSlideBoxDelegate) {

    $scope.startApp = function () {
        $state.go('tab.consonants');
    };

    $scope.startIntro = function () {
        $state.go('intro');
    }

    $scope.next = function () {
        $ionicSlideBoxDelegate.next();
    };

    $scope.previous = function () {
        $ionicSlideBoxDelegate.previous();
    };

    $scope.slideChanged = function (index) {
        $scope.slideIndex = index;
    };
})

.controller('ConsonantCtrl', function ($scope, Characters) {
    $scope.characters = Characters.allConsonants();

})

.controller('VowelsCtrl', function ($scope, Characters) {
    $scope.characters = Characters.allVowels();
});
