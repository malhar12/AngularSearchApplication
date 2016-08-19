angular.module('AngularSearch')
	.directive('pageNav', function(){
		return{
			replace: false,
			restrict: 'E',
			templateUrl: 'templates/pageNav.html'
		};
	});