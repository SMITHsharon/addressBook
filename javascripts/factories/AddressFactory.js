app.factory("AddressFactory", function($http, $q, FIREBASE_CONFIG) {

	let getFBAddresses = (userId) => {

		let addrezzez = [];

		return $q((resolve, reject) => {
			$http.get(`${FIREBASE_CONFIG.databaseURL}/addresses.json?orderBy="uid"&equalTo="${userId}"`)
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


	let editAddress = (thisAddress) => {

		return $q ((resolve, reject) => {
			$http.put(`${FIREBASE_CONFIG.databaseURL}/addresses/${thisAddress.id}.json`, JSON.stringify({
				FirstName: thisAddress.FirstName,
				LastName: thisAddress.LastName,
				StreetAddress: thisAddress.StreetAddress,
				City: thisAddress.City,
				State: thisAddress.State,
				Zip: thisAddress.Zip,
				Phone: thisAddress.Phone,
				uid: thisAddress.uid
			}))
			.then((resultz) => {
				resolve(resultz);
			})
			.catch((error) => {
				reject(error);
			});
		});
	};


	let deletz = (id) => {

		return $q ((resolve, reject) => {
			$http.delete(`${FIREBASE_CONFIG.databaseURL}/addresses/${id}.json`)
			.then((resultz) => {
				resolve(resultz);
			})
			.catch((error) => {
				eject(error);
			});
		});
	};


	return { 
		getFBAddresses:getFBAddresses, 
		postNewAddress:postNewAddress, 
		getSingleAddress:getSingleAddress, 
		editAddress:editAddress, 
		deletz:deletz
	};

});

