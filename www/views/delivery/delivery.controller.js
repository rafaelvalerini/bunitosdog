angular.module('starter').controller('DeliveryCtrl', function($log, $scope, $location, $ionicLoading, $localStorage, $ionicPopup, $window, Delivery, DeliveryModel, Stores){
	
	vm = this;

	vm.order = '';

	vm.message = '';

	if(!$localStorage.cart || $localStorage.cart.length == 0){
		$window.location.href = '#/app/menu';
		$window.location.reload();
		return;
	}

	vm.card = DeliveryModel.order();

	vm.store = Stores.get(vm.card.id_store);

	if(vm.store.value_tax_delivery){
		vm.store.value_tax_delivery_string = 'R$ ' + parseFloat(vm.store.value_tax_delivery).toFixed(2).replace('.', ',');
	}

	if(vm.card.type_delivery == 1){

		vm.card.total_geral = 'R$ ' + ((parseFloat(vm.card.total_value.replace('R$', '').replace(' ', '').replace(',', '.')) + vm.store.value_tax_delivery).toFixed(2)).replace('.', ',');

	}else{

		vm.card.total_geral = vm.card.total_value;

	}

	vm.confirmOrder = function(){

		$ionicLoading.show({
		    content: 'Carregando...',
			animation: 'fade-in',
			noBackdrop: false
		});

		Stores.getDataBase(vm.card.id_store).then(function(response){

			if($localStorage.typeDelivery == 2){

				var openPickupStore = Stores.getStatus(response.officeHoursPickupStore);

				if(!openPickupStore){

					$ionicLoading.hide();

					var confirmPopup =  $ionicPopup.alert({

				     	title: 'Pedido não aceito',

				     	template: 'Infelizmente neste horário nós já não estamos mais efetuando pedidos pelo aplicativo. Desde já agradecemos a sua compreensão.'

				   	});

				   	confirmPopup.then(function(res) {
					    $window.location.href = '#/app/menu';
					});

					return;

				}

			}

			if($localStorage.typeDelivery == 1){

				var openDelivery = Stores.getStatus(response.officeHoursDelivery);

				if(!openDelivery){

					$ionicLoading.hide();

					var confirmPopup =  $ionicPopup.alert({

				     	title: 'Pedido não aceito',

				     	template: 'Infelizmente neste horário nós já não estamos mais efetuando pedidos pelo aplicativo. Desde já agradecemos a sua compreensão.'

				   	});

				   	confirmPopup.then(function(res) {
					    $window.location.href = '#/app/menu';
					});

					return;

				}

			}

			if(vm.card.payment){

				try{

					if(vm.card.payment.back_value){

						vm.card.payment.back_value = '' + vm.card.payment.back_value;	

					}else{

						vm.card.payment.back_value = '';

					}


					if(vm.card.payment.card && vm.card.payment.card.trim != ''){

						vm.card.payment.card = parseInt(vm.card.payment.card);	

					}else{

						vm.card.payment.card = 0;

					}

				}catch(e){
					
				}

			}

			Delivery.save(vm.card).then(function(response) {

		 		$ionicLoading.hide();

		 		var order = response;

		 		$localStorage.cart = [];

		 		$localStorage.origin = 'delivery';

		 		var message = 'Seu pedido é o número ' + order.id + ' com tempo estimado de ' + order.time_to_delivery.time_to_delivery + ' minutos.'

		 		var confirmPopup = $ionicPopup.alert({
				     title: 'Pedido realizado com sucesso',
				     template: message
				});

				confirmPopup.then(function(res) {
				    $window.location.href = '#/app/orders';
				});

		    })
		    .catch(function(error) {

		    	$ionicLoading.hide();

		    	$ionicPopup.alert({

			     	title: 'Não foi possível concluir seu pedido',

			     	template: 'Não foi possível concluir seu pedido. Verifique sua conexão com a internet e tente novamente.'

			   	});

			   	$localStorage.origin = 'delivery';

			});

		}).catch(function(error) {

	    	$ionicLoading.hide();

	    	var confirmPopup =  $ionicPopup.alert({

		     	title: 'Pedido não aceito',

		     	template: 'Infelizmente neste momento não estamos mais efetuando pedidos pelo aplicativo. Desde já agradecemos a sua compreensão'

		   	});

		   	confirmPopup.then(function(res) {
			    $window.location.href = '#/app/menu';
			});

		});

	}

});
