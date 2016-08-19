'use strict';

angular.module('AngularSearch')
	.controller('DetailsController', ['$scope', 'AccountNo', '$window', '$location', function($scope, AccountNo, $window, $location) {
		
		var res = AccountNo.getAccount();
		if(res.status == 404){
			$window.alert('Account Number does not exist. Please enter another valid account number');
			$location.path('/search');
		} else {
			$scope.member = res.obj;
			AccountNo.initializeAccount();
		}
		
	}]);