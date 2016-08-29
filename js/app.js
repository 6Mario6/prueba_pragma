angular.module('comicApp', ['ngRoute','ui.router','comicApp.controllers'])
.config(function($stateProvider, $urlRouterProvider){
	$urlRouterProvider.otherwise('/login');
	$stateProvider
	.state('login',{
		url: '/login',
		templateUrl: 'templates/login.html',
		controller: 'loginController'
	})
	.state('register',{
		url: '/register',
		templateUrl: 'templates/register.html',
		controller: 'registerController'
	})
	.state('home',{
		url: '/home',
		templateUrl: 'templates/home.html',
		controller: 'homeController'
	})
	.state('list',{
		url: '/list',
		templateUrl: 'templates/list.html',
		controller: 'comicListController'
	})
	.state('comic',{
		url: "/comic/:id",
  		templateUrl: 'templates/comic.html',
		controller: 'comicDetailsController'
	})
	.state('newComic',{
		url: '/newComic',
		templateUrl: 'templates/addComic.html'
	});
});