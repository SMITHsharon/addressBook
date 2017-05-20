app.controller("AddressEditCtrl", function($location, $routeParams, $scope, AddressFactory) { 

	$scope.newAddress = {};

	AddressFactory.getSingleAddress($routeParams.id)
	.then((results) => {
		console.log("results.data :: ", results.data);
		$scope.newAddress = results.data;
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
		})
	};

});