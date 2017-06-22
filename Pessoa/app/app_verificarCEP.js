window.AngularApp =  angular.module('angular-app', []);

AngularApp.controller('UserCtrl', function($scope, $http){
var URL = 'http://apps.widenet.com.br/busca-cep/api/cep.json?code=';

	$scope.getCep = function(data, form) {
				console.log(form)
		if(form.$valid && data) {
			$http.get(URL + data.code).then(function(result){
				console.log(result)


			})
		};
	}
});

