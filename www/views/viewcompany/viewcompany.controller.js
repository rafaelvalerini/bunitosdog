angular.module('starter')

.controller('ViewCompanyCtrl', function($scope, $stateParams, $localStorage, Companies){
	
	vm = this;

	vm.company = Companies.get($stateParams.company)

	$localStorage.origin = 'viewcompany';
	
});
