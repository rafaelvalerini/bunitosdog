angular.module('starter')

.controller('ProductOrdersCtrl', function($log, $scope, $stateParams, $localStorage, Orders, Menu){
	
	vm = this;

	vm.order = Orders.get($stateParams.order);

	vm.order.products.forEach(function(e){

		if(e.additionals && e.additionals.length > 0){

			e.hasAdditional = true;

		}else{

			e.hasAdditional = false;

		}

		var product = Menu.getProduct(e.menu.id, e.id);

		if(product){
			e.logo = product.logo;
		}

	});

	$localStorage.origin = 'products';

});
