'use strict';
// see http://www.funnyant.com/angularjs-ui-router/

angular.module('clientApp').config(function($urlRouterProvider, $stateProvider) {
	// default missing route
	$urlRouterProvider
		.otherwise('/');

	$stateProvider
		// all states that compose the entire application will inherit from the app state
		// which includes a common header and common footer
		.state('app', {
			url: '/app',
			views: {
				'header': {
					templateUrl: '/views/partials/app_header.html'
				},
				'content': {
					templateUrl: '/views/main.html'
				},
				'footer': {
					templateUrl: '/views/partials/app_footer.html'
				}
			}
		})
		// this state is nested within app and inherits it's views unless explicitly overriden
		.state('app.photos', {
			url: '/photos',
			views: {
				'content@': {
					templateUrl: '/views/photos.html'
				}
			}
		})
		// the landing page is not attached to the app state and therefore lives on the same level
		// if a view is omitted it will not inherit, it simply won't appear
		.state('landing', {
			url: '/',
			views: {
				'header': {
					templateUrl: '/views/partials/landing_header.html'
				},
				'content': {
					templateUrl: '/views/landing.html'
				}
			}
		});
});