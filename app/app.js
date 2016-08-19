'use strict';

// Declare app level module which depends on views, and components
angular.module('AngularSearch', ['ngRoute'])
	.config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
		$routeProvider.when('/', {redirectTo: '/search'})

		.when('/search', {
			templateUrl: '/lookup/search.html',
			controller: 'SearchController'
		})

		.when('/details', {
			templateUrl: '/dashboard/details.html',
			controller: 'DetailsController'
		})

		.otherwise({redirectTo: '/search'});
	}]);
