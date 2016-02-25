angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
        
    .state('login', {
      url: '/login',
      templateUrl: 'templates/login.html',
      controller: 'AppCtrl'
    })
        
    .state('join', {
      url: '/join',
      templateUrl: 'templates/join.html',
      controller: 'AppCtrl'
    })
      
    .state('menu', {
      url: '/side-menu22',
      abstract:true,
      templateUrl: 'templates/menu.html'
    })
        
    .state('menu.profile', {
      url: '/page31',
      views: {
        'side-menu22': {
          templateUrl: 'templates/profile.html',
          controller: 'profileCtrl'
        }
      }
    })
        
    .state('menu.cards', {
      url: '/page32',
      views: {
        'side-menu22': {
          templateUrl: 'templates/cards.html',
          controller: 'cardsCtrl'
        }
      }
    })
        
    .state('menu.trades', {
      url: '/page36',
      views: {
        'side-menu22': {
          templateUrl: 'templates/trades.html',
          controller: 'tradesCtrl'
        }
      }
    })
        
      
    ;

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/login');

});