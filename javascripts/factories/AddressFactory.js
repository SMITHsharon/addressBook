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
			.catch((fbError) => {
				reject(fbError);
			});
		});
	};


	let getSingleAddress = (id) => {

		return $q ((resolve, reject) => {
			$http.get(`${FIREBASE_CONFIG.databaseURL}/addresses/${id}.json`)
			.then((resultz) => {
console.log("resultz :: ", resultz);
				resultz.data.id = id;
				resolve(resultz);
			})
			.catch((error) => {
				reject("error");
			});
		});
	};


	let postNewAddress = (newAddress) => {

		return $q ((resolve, reject) => {
			$http.post(`${FIREBASE_CONFIG.databaseURL}/addresses.json`, JSON.stringify(newAddress))
			.then((resultz) => {
				resolve(resultz);
			})
			.catch((error) => {
				reject("error");
			});
		});
	};


	let editAddress = () => {

		return $q ((resolve, reject) => {
			$http.get(`${FIREBASE_CONFIG.databaseURL}/addresses/${address.id}.json`, JSON.stringify)
			.then((resultz) => {
				resolve(resultz);
			})
			.catch((error) => {
				reject(error);
			});
		});
	};


	return {getFBAddresses:getFBAddresses, postNewAddress:postNewAddress, getSingleAddress:getSingleAddress, editAddress:editAddress};

});