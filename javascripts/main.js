app.run((FIREBASE_CONFIG) => {
	firebase.initializeApp(FIREBASE_CONFIG);
});


app.controller("AddressCtrl", ($http, $q, $scope, FIREBASE_CONFIG) => {
	
	$scope.listAddresses = true;
	$scope.addresses = [];


	let getFBAddresses = () => {

		let addrezzez = [];

		return $q((resolve, reject) => {
			$http.get(`${FIREBASE_CONFIG.databaseURL}/addresses.json`)
			.then((fbAddresses) => {
				let fbAddressList = fbAddresses.data;
				Object.keys(fbAddressList).forEach((key) => {
					fbAddressList[key].id = key;
					addrezzez.push(fbAddressList[key]);
				});
					resolve(addrezzez);
			})
			.catch((error) => {
				reject(error);
			});
		});
	};


	let getAddresses = () => {
		getFBAddresses()
		.then((fbAddresses) => {
			$scope.addresses = fbAddresses;
		})
		.catch((error) => {
			console.log("error in getAddresses", error);
		});
	};

	getAddresses();


	let postNewAddress = (newAddress) => {
		return $q ((resolve, reject) => {
			$http.post(`${FIREBASE_CONFIG.databaseURL}/addresses.json`, JSON.stringify(newAddress))
			.then((addrezz) => {
				resolve(addrezz);
			})
			.catch((error) => {
				reject(error);
			});
		});
	};

	$scope.addAddress = () => {
		$scope.listAddresses = false;
		$scope.newAddress = {};
		$scope.showNewAddressForm = true;
	};

	$scope.cancel = () => {
		$scope.showNewAddressForm = false;
		$scope.listAddresses = true;
	};


	$scope.addThisAddress = () => {

		postNewAddress($scope.newAddress)
		.then((response) => {
			// $scope.newAddress = {};
			$scope.showNewAddressForm = false;
			$scope.listAddresses = true;
			getAddresses();
		})
		.catch((error) => {
			console.log("error in addAddress", error);
		});
	};

});

