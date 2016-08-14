angular.module('starter')

.controller('MenuCtrl', function($scope, $stateParams, $localStorage, Menu){
	
	vm = this;

	vm.menus = Menu.all();

	$localStorage.origin = 'menu';

});
