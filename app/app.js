'use strict';

// Declare app level module which depends on views, and components
var blogAppModule = angular.module('blogAppModule', [
  'ui.router',
  'ngSanitize'
])
.config(['$stateProvider', '$urlRouterProvider','$locationProvider', function($stateProvider, $urlRouterProvider,$locationProvider) {

$stateProvider
  .state('home',{
  	url : '/home',
  	templateUrl : 'module/home.html'
  })
  .state('login',{
  	url : '/login',
  	templateUrl : 'module/login/view/login.html',
  	controller: 'loginController'
  })
  .state('blogs',{
  	url : '/blogs',
  	templateUrl : 'module/blog/view/blogList.html',
  	controller: 'blogListController'
  })
  .state('addblog',{
  	url : '/addblog',
  	templateUrl : 'module/blog/view/addeditBlog.html',
  	controller: 'blogController'
  })
  .state('editblog',{
    url : '/editblog',
    templateUrl : 'module/blog/view/addeditBlog.html',
    controller: 'editBlogController',
    params: {blogtoedit: null}
  })
  .state('viewblog',{
    url : '/viewblog',
    templateUrl : 'module/blog/view/viewBlog.html',
    controller: 'showBlogController',
    params: {blogDataObj: null}
  });

  $urlRouterProvider.otherwise('home');
  $locationProvider.html5Mode(true);
}])
.run(function ($state,$rootScope) {
    $rootScope.$state = $state;
})
