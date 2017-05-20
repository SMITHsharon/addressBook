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


	$scope.deleteAddress = (id) => {


		AddressFactory.deletz(id)
		.then(() => {
			getAddresses();
		})
		.catch((error) => {
			console.log("error in deleteAddress", error);
		});
	};


	$scope.inputChange = (address) => {

		AddressFactory.editAddress(address)
		.then(() => {
			//
		})
		.catch((error) => {
			console.log("error in inputChange", error);
		});
	};


});                                                                                                                                                                          