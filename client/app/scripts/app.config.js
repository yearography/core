'use strict';

angular.module('clientApp').config(function($urlRouterProvider, $stateProvider) {
	// default missing route
	$urlRouterProvider
		.otherwise('/');

	$stateProvider
		.state('landing', {
			url: '/',
			views: {
				'content': {
					templateUrl: '/views/landing.html'
				}
			}
		});
});