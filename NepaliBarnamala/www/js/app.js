angular.module('starter', ['ionic', 'starter.controllers', 'starter.services'])

.run(function ($ionicPlatform) {
    $ionicPlatform.ready(function () {
        // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
        // for form inputs)
        if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
            cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        }
        if (window.StatusBar) {
            // org.apache.cordova.statusbar required
            StatusBar.styleLightContent();
        }
    });
})

.config(function ($stateProvider, $urlRouterProvider) {

    $stateProvider

    .state('intro', {
        url: '/',
        templateUrl: 'templates/intro.html',
        controller: 'IntroCtrl'
    })

    .state('tab', {
        url: '/tab',
        abstract: true,
        templateUrl: "templates/tabs.html"
    })


    .state('tab.consonants', {
        url: '/consonants',
        views: {
            'tab-consonants': {
                templateUrl: 'templates/tab-consonants.html',
                controller: 'ConsonantCtrl'
            }
        }
    })

     .state('tab.vowels', {
         url: '/vowels',
         views: {
             'tab-vowels': {
                 templateUrl: 'templates/tab-vowels.html',
                 controller: 'VowelsCtrl'
             }
         }
     })

    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/');
});
