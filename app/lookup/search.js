'use strict';

angular.module('AngularSearch')
	.controller('SearchController', ['$scope', 'AccountNo', '$location', '$window', function($scope, AccountNo, $location, $window) {
		
		$scope.account = {};
		$scope.submitForm = function(acc){

			var res = AccountNo.validateField(acc);
			console.log(res);
			if(res.value){
				AccountNo.findAccountDetails(acc);
				$scope.account = {};
				$location.path('/details');	
			} else{
				$window.alert(res.error);
				$scope.account = {};
			}
		};
	}]);