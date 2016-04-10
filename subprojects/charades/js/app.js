var app = angular.module('charadesGame', ['ngRoute','ngAnimate']);

app.config(function ($routeProvider) { 
  $routeProvider 
    .when('/', { 
      // controller: 'HomeController', 
      templateUrl: 'views/home.html' 
    })
    // .when( '/photos/:id', {
    //   controller: 'PhotoController',
    //   templateUrl: 'views/photo.html'
    // })
    .when( '/instructions/', {
      templateUrl: 'views/instructions.html'
    })  
    .when( '/play/', {
      controller: 'GameController',
      templateUrl: 'views/game.html'
    }) 
    .when( '/gameOver/:id', {
      controller: 'GameOverController',
      templateUrl: 'views/gameOver.html'
    }) 
    .otherwise({ 
      redirectTo: '/' 
    }); 
});