angular.module('starter')

.controller('OrdersCtrl', function($log, $scope, $stateParams, $localStorage, $ionicLoading, $ionicPopup, Orders){
	
	vm = this;

	$ionicLoading.show({
	    content: 'Carregando...',
		animation: 'fade-in',
		noBackdrop: false
	});

	vm.showOrders = false;

	vm.showOrdersNotFound = false;

	vm.loginNotFound = false

	$localStorage.orders = [];

	if($localStorage.user && $localStorage.user.id){

		Orders.findByConsumer($localStorage.user.id).then(function(response) {

	 		$ionicLoading.hide();

	 		vm.orders = response;

	 		$localStorage.orders = vm.orders;

			if (!vm.orders || vm.orders.lenght == 0 ) {

				vm.showOrdersNotFound = true;

			}else{

				vm.orders.forEach(function(o){

					if(o.status == 1){
						o.statusName = 'Aguardando Processamento';
					}

					if(o.status == 2){
						o.statusName = 'Em preparo';
					}

					if(o.status == 3){
						o.statusName = 'Em rota de entrega';
					}

					if(o.status == 4){
						o.statusName = 'Entregue';
					}

					if(o.status == 4){
						o.statusName = 'Cancelado';
					}

				});

				vm.orders.sort(function(a, b){return b.id-a.id});

				vm.showOrders = true;

			}

			vm.loginNotFound = false;

	    })
	    .catch(function(error) {

	    	$ionicLoading.hide();

	    	$ionicPopup.alert({

		     	title: 'Não foi possível consultar seus pedidos',

		     	template: 'Verifique a sua conexão com a internet e tente novamente.'

		   	});

		});

	}else{

		vm.loginNotFound = true;

		$ionicLoading.hide();

	}

	$localStorage.origin = 'orders';

});
