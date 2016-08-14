angular.module('starter').controller('CartCtrl', function($log, $scope, $stateParams, $localStorage, $ionicPopup, $window, AdditionalProduct){
	
	vm = this;

	vm.observation = '';

	vm.getCart = function(){

		return $localStorage.cart;

	}

	vm.sumTotal = function(){
		
		if($localStorage.cart){

			vm.total = 0;

			$localStorage.cart.forEach(function(c){
				
				if(c.total){
				
					vm.total += parseFloat(c.total.replace('R$', '').replace(' ', '').replace(',', '.'))

				}
				
			});

			

			vm.total = 'R$ ' + vm.total.toFixed(2).replace('.',',');

		}else{

			vm.total = 0;

		}

		$localStorage.totalCart = vm.total;
	}

	vm.removeProduct = function($index){
				 // A confirm dialog
	   	var confirmPopup = $ionicPopup.confirm({

	     	title: 'Remover produto',

	     	template: 'Deseja realmente remover o produto do carrinho?'

	   	});

	   	confirmPopup.then(function(res) {

	     	if(res) {

	       		$localStorage.cart.splice($index, 1);

	       		vm.sumTotal();

	     	}

	   	});

	}

	vm.showCart = function(){

		if($localStorage.cart && $localStorage.cart.length > 0){

			return true;

		}else{

			return false;

		}

	}

	vm.confirmCart = function(){

		$localStorage.cartObservation = vm.observation;

		$window.location.href = '#/app/stores/1'

	}

	$localStorage.origin = 'cart';

	vm.sumTotal();

});
