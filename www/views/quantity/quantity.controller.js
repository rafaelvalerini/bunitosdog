angular.module('starter')

.controller('QuantityCtrl', function($log, $scope, $stateParams, $localStorage, $window, $ionicPopup, $ionicLoading, Menu, AdditionalProduct){
	
	vm = this;

	$ionicLoading.show({
	    content: 'Carregando...',
		animation: 'fade-in',
		noBackdrop: false
	});

	vm.menu = Menu.get($stateParams.menu);

	vm.product = $localStorage.product;

	$log.debug(vm.product);

	vm.quantity	= 1;

	var value = parseFloat(vm.product.value.replace('R$', '').replace(' ', '').replace(',', '.')) * vm.quantity;

	vm.quantityTotal = 'R$ ' + value.toFixed(2);

	vm.additional = [];

	vm.additionalProducts = [];

	$scope.additionalProducts = [];

	vm.options = [];

	AdditionalProduct.all().then(function(response) {

		if(response && response.length > 0){

			vm.additionalProducts = response;

			vm.additionalProducts.forEach(function(e){

				if(vm.product.additionals && vm.product.additionals.length > 0){

					if(e.active){

						vm.product.additionals.forEach(function(add){

							if(add.id == e.id){
							
								e.value =  ('R$ ' + (parseFloat(e.value.replace('R$', '').replace(' ', '').replace(',', '.')).toFixed(2))).replace('.',',');

								$scope.additionalProducts.push(e);

							}

						})

					}

				}
				
			});
		}

		$ionicLoading.hide();

	}).catch(function(error) {

    	$ionicLoading.hide();

	});

	vm.optionProducts = [];

	vm.optionProducts2 = [];

	vm.optionalSelect = {id: ''};

	vm.optionalSelect2 = {id: ''};

	AdditionalProduct.getOptions().then(function(response) {

		if(response && response.length > 0){

			response.forEach(function(e){

				if(vm.product.options && vm.product.options.length > 0){

					if(e.active){

						vm.product.options.forEach(function(add){

							if(add.id == e.id){
							
								if(add.id == '579e7a854a8efce2c0ef98e9' || add.id == '579e7a854a8efce2c0ef98ea'){
									vm.optionProducts2.push(e);
								}else{
									vm.optionProducts.push(e);
								}
								
							}

						})

					}

				}
				
			});
		}

		if(vm.optionProducts.length > 0){
			vm.optionalSelect = vm.optionProducts[0];
		}

		if(vm.optionProducts2.length > 0){
			vm.optionalSelect2 = vm.optionProducts2[0];
		}

		$ionicLoading.hide();

	}).catch(function(error) {

    	$ionicLoading.hide();

	});



	vm.addProduct = function(){
		
		if(!$localStorage.cart){
		
			$localStorage.cart = [];
		
		}

		var options = [];

		if(vm.optionProducts && vm.optionProducts.length > 0){

			if(!vm.optionalSelect || !vm.optionalSelect.id){

				$ionicPopup.alert({
				     title: 'Opção não selecionada',
				     template: 'Para este produto é necessário a seleção de uma opção. Selecione as opções e tente novamente.'
				});

				return;

			}

			vm.optionProducts.forEach(function(e){
				
				if(vm.optionalSelect == e){

					vm.options.push(e);

				}

			});

		}

		if(vm.optionProducts2 && vm.optionProducts2.length > 0){

			if(!vm.optionalSelect2 || !vm.optionalSelect2.id){

				$ionicPopup.alert({
				     title: 'Opção não selecionada',
				     template: 'Para este produto é necessário a seleção das duas opções. Selecione as opções e tente novamente.'
				});

				return;

			}

			vm.optionProducts2.forEach(function(e){
				
				if(vm.optionalSelect2 == e){

					vm.options.push(e);

				}

			});

		}

		$localStorage.cart.push({menu: vm.menu, product: vm.product, quantity: vm.quantity, total: vm.quantityTotal, additional: vm.additional, obs: vm.observation, options: vm.options});

		$window.location.href = '#/app/cart';

	}

	vm.recalculateTotal = function(){
		
		var value = parseFloat(vm.product.value.replace('R$', '').replace(' ', '').replace(',', '.')) * vm.quantity;

		if(vm.additional){

			vm.additional.forEach(function(a){

				value += parseFloat(a.value.replace('R$', '').replace(' ', '').replace(',', '.')) * vm.quantity

			});

		}	

		 

		vm.quantityTotal = ('R$ ' + value.toFixed(2)).replace('.',',');
		
	}

	vm.additionalProduct = function(){

		if($scope.additionalProducts.length > 0){

	        var myPopup = $ionicPopup.confirm({
			    template: '<ion-checkbox ng-repeat="item in additionalProducts" ng-model="item.checked" ng-checked="item.checked" style="text-align: left; ">{{ item.name }}<span class="badge badge-assertive" style="top: -3px;">{{ item.value }}</span></ion-checkbox><br />',
			    title: 'Acréscimos',
			    scope: $scope
			});

			myPopup.then(function(res) {
			  	if(res){
			  		vm.additional = [];
			  		$scope.additionalProducts.forEach(function(e){
			  			if(e.checked){
			  				vm.additional.push(e);
			  			}
			  		});
			  		vm.recalculateTotal();
			  	}
			});
		}
	}

	vm.removeAdditionalProduct = function(additional){

		vm.additional.splice(vm.additional.indexOf(additional), 1);

		vm.recalculateTotal();
		  
	}


	$localStorage.origin = 'quantity';
});
