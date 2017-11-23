app.controller("AddressNewCtrl", function($http, $location, $q, $rootScope, $scope, FIREBASE_CONFIG, AddressFactory, UserFactory) {
	
	$scope.currentPath = $location.path();
	
	$scope.addNewAddress = () => {

		// calling getUser better for getting userId than using $rootScope 
    	$scope.newAddress.uid = $rootScope.user.uid;

    	// $scope.newAddress.uid = UserFactory.getUser($rootScope.user.uid);

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