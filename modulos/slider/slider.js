angular.module('sliderModule',['ngAnimate'])
	.directive('slider', function ($timeout) {
	  return {
		restrict: 'AE',
		replace: true,
		templateUrl:'slidertemplate.html',
		controller: function($scope) {
			$scope.images=[
				{src:'img05.jpg',title:''},
				{src:'img06.jpg',title:''},
				{src:'img07.jpg',title:''}
			];
				
			$scope.currentIndex=0;

			$scope.next = function(){
				$scope.currentIndex < $scope.images.length-1? $scope.currentIndex++ : $scope.currentIndex=0;
			};
			
			$scope.prev = function(){
				$scope.currentIndex > 0? $scope.currentIndex-- : $scope.currentIndex=$scope.images.length-1;
			};
			
			$scope.$watch('currentIndex',function(){
				$scope.images.forEach(function(image){
					image.visible = false;
				});
				$scope.images[$scope.currentIndex].visible = true;
			});
			
			/* Start: For Automatic slideshow*/
			
			var timer;
			
			var sliderFunc = function(){
				timer = $timeout(function(){
					$scope.next();
					timer = $timeout(sliderFunc,1000);
				},1000);
			};
			
			sliderFunc();
			
			$scope.$on('$destroy',function(){
				$timeout.cancel(timer);
			});
			
			/* End : For Automatic slideshow*/
		},
		controllerAs: 'sliderCtrl'
	  }
	}
);