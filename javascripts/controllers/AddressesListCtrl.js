app.controller("AddressesListCtrl", function($scope, ItemFactory) {

	$scope.addresses = [];

	let getAddresses = () => {
		ItemFactory.getFBAddresses()
		.then((fbAddrezzez) => {
			$scope.addresses = fbAddrezzez;
		})
		.catch((error) => {
			console.log("error in getAddresses", error);
		});
	};

	getAddresses();


});