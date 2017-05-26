app.controller("AuthCtrl", function($location, $rootScope, $scope, AuthFactory, UserFactory) {

	// $scope.auth = {
	// 	email: "s.s@gmail.com",
	// 	password: "123456"
	// };

	if ($location.path() === '/logout') {
		AuthFactory.logout();
		$rootScope.user = {};
		$location.url('/auth');
	}


	let logMeIn = () => {

		AuthFactory.authenticate($scope.auth).then((userCreds) => {
			return UserFactory.getUser(userCreds.uid);
		}, (error) => {
			console.log("authenticate error", error);
		}).then((user) => {
			$rootScope.user = user;
			$location.url('/addresses/list');
		}).catch((error) => {
			console.log("error on getUser", error);
		});
	};


	$scope.registerUser = () => {

		// new auth
		// add username
		// login
		AuthFactory.registerWithEmail($scope.auth).then((didRegister) => {
			// console.log("didRegister", didRegister);
			$scope.auth.uid = didRegister.uid;
			return UserFactory.addUser($scope.auth);
		}, (error) => {
			console.log("error on registerWithEmail", error);
		}).then((registerComplete) => {
			logMeIn();
		}).catch((error) => {
			console.log("error on addUser", error);
		});
	};


	$scope.loginUser = () => {
		logMeIn();
	};

});