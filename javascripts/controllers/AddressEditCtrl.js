app.controller("AddressEditCtrl", function($location, $routeParams, $scope, AddressFactory) { 

	$scope.currentPath = $location.path();
	$scope.newAddress = {};

	AddressFactory.getSingleAddress($routeParams.id)
	.then((results) => {
		$scope.newAddress = results.data;
		$scope.newAddress.Birthday = new Date($scope.newAddress.Birthday);
	})
	.catch((error) => {
		console.log("error in getSingleAddress", error);
	});


	$scope.addNewAddress = () => {

		AddressFactory.editAddress($scope.newAddress)
		.then(() => {
			$location.url('/addresses/list');
		})
		.catch((error) => {
			console.log("error in addNewAddress for Edit Address", error);
		});
	};

});