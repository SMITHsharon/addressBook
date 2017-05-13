
var app = angular.module("addressBook", []);

app.controller("ItemCtrl", ($scope) => {
	$scope.itemText = "writing this variable to the DOM;)";
});

