
angular.
module('myApp').
	config(['$locationProvider','$routeProvider', 
		function config($locationProvider,$routeProvider) {
			$locationProvider.hashPrefix('!');
			
			$routeProvider.
				when('/products/:productId', {
					// template: '<phone-list></phone-list>'
					templateUrl: 'products.html',
					controller: 'productController'
				}).
				when('/products/:id/:timeOrder', {
					templateUrl: 'detail.html',
					controller: 'detailController'
				}).
				otherwise('/products');
			// $locationProvider.html5Mode(true);
		}
	])
	.controller ('productController', function ($scope, $http, $routeParams){
		$http.get("data.php").then(function (response){
			$scope.result =  response.data;
        	$scope.statustext = response.statusText; 
        	$scope.params = $routeParams;
		});
	})
	.controller ('detailController', function ($scope, $routeParams){
		$scope.param = $routeParams;
	});