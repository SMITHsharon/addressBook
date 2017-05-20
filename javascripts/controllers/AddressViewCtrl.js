app.controller("AddressViewCtrl", function($routeParams, $scope, AddressFactory) {

	$scope.selectedAddress = {};

console.log("routeParams ::", $routeParams);

	AddressFactory.getSingleAddress($routeParams.id)
	.then((results) => {
		$scope.selectedAddress = results.data;
console.log("$scope.selectedAddress :: ", $scope.selectedAddress);
	})
	.catch((error) => {
		console.log("error in getSingleAddress", error);
	});

});