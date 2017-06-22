window.AngularApp =  angular.module('angular-app', []);

AngularApp.controller('UserCtrl', function($scope){
	//var teste = 1234567;
	$scope.sendForm = function(data,form) {
		console.log(data);
		if(form.$valid) {
			console.log("enviar requisisao")
		}
	}

});

/*
angular.module('angular-app');

function UserCtrl () {
	console.log('Ola')
	
}*/