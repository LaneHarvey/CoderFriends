angular.module('app', ['ui-router'])
.config(function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/');
  $stateProvider
    .state('auth', {
      url: '/auth/github',
      templateURL: './index.html'
    })
    .state('home', {
      url:'/home',
      templateURL:'./templates/home.html'
    })
    .state('friend', {
      url:'/friend/:github_username',
      templateURL:'./templates/friend.html'
    });
});
