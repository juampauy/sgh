angular.module('footModule',[])
	.directive('foot', function () {
		return {
			restrict: 'AE',
			replace: true,
			templateUrl:'footertemplate.html',
			controller: function($scope) {
				$scope.version=5;
				$scope.build=14;
			},
			controllerAs: 'footerCtrl'
		}
	});