angular.module('loginModule',[])
	.directive('login', function () {
		return {
		restrict: 'AE',
		replace: true,
		templateUrl:'logintemplate.html',
		controller: function($scope) {
			$scope.user = {};
			
			$scope.logIn = function(user) {
				
			}
		},
		controllerAs: 'loginCtrl'
		}
	});