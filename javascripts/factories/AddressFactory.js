app.factory("AddressFactory", function($http, $q, FIREBASE_CONFIG) {

	let getFBAddresses = () => {

		let addrezzez = [];

		return $q((resolve, reject) => {
			$http.get(`${FIREBASE_CONFIG.databaseURL}/addresses.json`)
			.then((fbAddresses) => {
				let fbAddressList = fbAddresses.data;
				if (fbAddressList !== null) {
					Object.keys(fbAddressList).forEach((key) => {
						fbAddressList[key].id = key;
						addrezzez.push(fbAddressList[key]);
					});
				}
				resolve(addrezzez);
			})
			.catch((error) => {
				reject(error);
			});
		});
	};

	return {getFBAddresses:getFBAddresses};
});