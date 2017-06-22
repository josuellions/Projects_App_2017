angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {
	$scope.fechar = function() {
		ionic.Platform.exitApp();
	}
})