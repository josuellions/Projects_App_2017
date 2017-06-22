window.AngularApp =  angular.module('angular-app', []);

AngularApp.controller('UserCtrl', function($scope, $http){
	$scope.list = [
	{"status":1,"code":"05787-000","state":"SP","city":"São Paulo","district":"Pirajussara","address":"Estrada do Campo Limpo - de 3901"},
	{"status":1,"code":"06140-102","state":"SP","city":"Osasco","district":"Conceição","address":"Rua José Martins de Souza"},
	{"status":1,"code":"09921-040","state":"SP","city":"Diadema","district":"Centro","address":"Rua Canadá (Vl Mulford)"},
	{"status":1,"code":"07172-086","state":"SP","city":"Guarulhos","district":"Jardim Presidente Dutra","address":"Rua Paschoal Ricci"},
	{"status":1,"code":"06045-260","state":"SP","city":"Osasco","district":"Novo Osasco","address":"Rua Domingos de Morais"},
]
});

