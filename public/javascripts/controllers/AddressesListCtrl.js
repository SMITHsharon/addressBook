app.controller("AddressesListCtrl", function($rootScope, $scope, AddressFactory) {

	$scope.addresses = [];

	let getAddresses = () => {

		AddressFactory.getFBAddresses($rootScope.user.uid)
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


	// not used in this app
	// used in ToDoApp for watching/toggling change on checkbox
	// $scope.inputChange = (address) => {

	// 	AddressFactory.editAddress(address)
	// 	.then(() => {
	// 		//
	// 	})
	// 	.catch((error) => {
	// 		console.log("error in inputChange", error);
	// 	});
	// };


});                                                                                                                                                                          