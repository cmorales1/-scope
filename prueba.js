var A = angular.module("A",[]);
A.controller("ejemplo",function($scope){
	$scope.nombre = "cesar";
	$scope.formulario = function(){
	$scope.nombrecompleto = $scope.Nombre + " " + $scope.Apellido}
})


