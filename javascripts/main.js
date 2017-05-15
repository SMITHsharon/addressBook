app.run((FIREBASE_CONFIG) => {
	firebase.initializeApp(FIREBASE_CONFIG);
});


app.controller("AddressCtrl", ($http, $q, $scope, FIREBASE_CONFIG) => {
	
	$scope.addresses = [];


	let getFBAddresses = () => {
// console.log("in getFBAddresses");
		let addrezzez = [];

		return $q((resolve, reject) => {
			$http.get(`$(FIREBASE_CONFIG.databaseURL}/addresses.json`)
			.then((fbAddresses) => {
console.log("fbAddresses :: ", fbAddresses);
				let fbAddressList = fbAddresses.data;
				Object.key(fbAddressList).forEach((key) => {
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

});

