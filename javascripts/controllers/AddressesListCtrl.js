app.controller("AddressesListCtrl", function($location, $scope, ItemFactory) {

	$scope.addresses = [];

	let getAddresses = () => {
console.log("getting Addresses in AddressesListCtrl");
		ItemFactory.getFBAddresses()
		.then((fbAddrezzez) => {
			$scope.addresses = fbAddrezzez;
console.log("$scope.addresses");
		})
		.catch((error) => {
			console.log("error in getAddresses", error);
		});
	};

console.log("in AddressesListCtrl");
	getAddresses();


});