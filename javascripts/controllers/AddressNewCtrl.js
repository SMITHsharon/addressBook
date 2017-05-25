app.controller("AddressNewCtrl", function($http, $location, $q, $scope, FIREBASE_CONFIG, AddressFactory) {
	
	$scope.addNewAddress = () => {

		AddressFactory.postNewAddress($scope.newAddress)
		.then((response) => {
			$scope.newAddress = {};
			$location.url("/addresses/list");
		})
		.catch((error) => {
			console.log("error in addNewAddress", error);
		});
	};

});