angular.module('starter').controller('CompaniesCtrl', function($scope, $stateParams, $localStorage, Beers, Companies){
	
	vm = this;

	vm.operation = $stateParams.operation;

	vm.beer = $stateParams.beer;

	vm.size = Beers.getSize(vm.beer, $stateParams.size);

	vm.companies = Companies.all();

	$localStorage.origin = 'companies';

});
