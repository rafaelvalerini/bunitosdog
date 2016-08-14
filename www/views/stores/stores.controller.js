angular.module('starter').controller('StoresCtrl', function($log, $scope, $stateParams, $localStorage, $window, $ionicPopup, Stores, $rootScope){
	
	vm = this;

	vm.stores = $localStorage.stores;

	vm.platform = $rootScope.platform;

	if($stateParams.id == 1){

		var show = 0;

		if(vm.stores.length > 0){

			vm.stores.forEach(function(e){

				if(e.open){

					$log.debug(e);

					if(e.delivery_open && e.officeHoursDelivery.OpenClose == 'Aberto'){

						e.isDelivery = true;	

						show = 1;

					}
					
					if(e.pickup_store_open && e.officeHoursPickupStore.OpenClose == 'Aberto'){

						e.isPickupStore = true;

						show = 1;

					}

				}else{

					e.isDelivery = false;

					e.isPickupStore = false;

				}

			})

		}

		vm.isDelivery = true;

		if(show == 0){

			var confirmPopup = $ionicPopup.confirm({
		     	title: 'Estabelecimento fechado',
		     	template: 'Infelizmente nossos estabelecimentos se encontram fechados neste momento. Agradecemos a compreenção.'
		   	});

		   	confirmPopup.then(function(res) {
		     	if(res) {
					$window.location.href = '#/app/menu';
		     	} 
		   	});

		}

	}else{
		vm.isDelivery = false;
	}

	$localStorage.origin = 'stores';

	vm.select = function(id){
		
		var model = Stores.get(id);

		$localStorage.store = model.id;

		$window.location.href = '#/app/typedelivery';

	}

	vm.selectAnticipate = function(id){
		
		var model = Stores.get(id);

		var confirmPopup = $ionicPopup.confirm({
	     	title: model.name,
	     	template: 'Efetue seu pagamento no caixa e retire seu pedido no balcão. Deseja confirmar?'
	   	});

	   	confirmPopup.then(function(res) {
	     	if(res) {
	       		$localStorage.store = model.id;

				$window.location.href = '#/app/login/3';

	     	} 
	   	});
		
	}

	vm.selectDelivery = function(id){
		
		var model = Stores.get(id);

		$log.debug(model);

		var message = 'A taxa de entrega é de R$ ' + ((parseFloat(model.value_tax_delivery)).toFixed(2)).replace('.', ',')+' Deseja confirmar?';

		var confirmPopup = $ionicPopup.confirm({
	     title: model.name,
	     template: message
	   });

	   confirmPopup.then(function(res) {

	     if(res) {

	       $localStorage.store = model.id;

			$window.location.href = '#/app/payments';

	     } 
	   });
		
	}

	vm.showMap = function(store){
		window.open('http://maps.google.com?q='+store.address,'_system');
	}

});
