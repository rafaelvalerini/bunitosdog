angular.module('starter')

.controller('PaymentsCtrl', function($log, $scope, $stateParams, $ionicPopup, $localStorage, $window, Stores){
	
	vm = this;

	$localStorage.origin = 'payments';

	vm.payment = 2;

	vm.backValue = '';

	vm.card = {};

	vm.store = Stores.get($localStorage.store);

	vm.confirmPayments = function(){

		if(vm.payment == 1){

			if(!vm.typeCard){

				$ionicPopup.alert({

			     	title: 'Cartão Obrigatório',

			     	template: 'É necessário selecionar o cartão que será utilizado para o pagamento.'

			   	});

			   	return;
			}

			$localStorage.payment = {id: 1, card: vm.typeCard};

		}else {

			$localStorage.payment = {id: 2, back_value: vm.backValue};

		}

		$window.location = '#/app/login/1';

	}

});

