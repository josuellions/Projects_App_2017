window.AngularApp =  angular.module('angular-app', []);

AngularApp.controller('UserCtrl', function($scope, $http){
	$scope.list = [
	{"code":"01","titulo":"The Matrix"},
	{"code":"02","titulo":"The Matrix Reloaded"},
	{"code":"03","titulo":"The Matrix Revolutions"},
	{"code":"04","titulo":"The Terminator"},
	{"code":"05","titulo":"Oblivion"},


	//{"status":1,"code":"05787-000","state":"SP","city":"São Paulo","district":"Pirajussara","address":"Estrada do Campo Limpo - de 3901"},
	// {"status":1,"code":"06140-102","state":"SP","city":"Osasco","district":"Conceição","address":"Rua José Martins de Souza"},
	// {"status":1,"code":"09921-040","state":"SP","city":"Diadema","district":"Centro","address":"Rua Canadá (Vl Mulford)"},
	// {"status":1,"code":"07172-086","state":"SP","city":"Guarulhos","district":"Jardim Presidente Dutra","address":"Rua Paschoal Ricci"},
	// {"status":1,"code":"06045-260","state":"SP","city":"Osasco","district":"Novo Osasco","address":"Rua Domingos de Morais"},
]

 // console.log($scope);

 //    $scope.addAddress = function (newAddress) {
 //        $scope.list.push(JSON.parse(JSON.stringify(newAddress)));
 //    }



        //add list e exibir com array
    $scope.addAddress = function (newTitulo) {
        $scope.list.push(JSON.parse(JSON.stringify(newTitulo)));
    }

    console.log($scope);

});
