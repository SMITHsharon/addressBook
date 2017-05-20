app.controller("AddressesListCtrl", function($location, $scope, AddressFactory) {

	$scope.addresses = [];

	let getAddresses = () => {

		AddressFactory.getFBAddresses()
		.then((fbAddrezzez) => {
			$scope.addresses = fbAddrezzez;
		})
		.catch((error) => {
			console.log("error in getAddresses", error);
		});
	};

	getAddresses();


});                                                                                                                                                                          