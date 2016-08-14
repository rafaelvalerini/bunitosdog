angular.module('starter').controller('LocationCtrl', function($scope, $localStorage, $ionicLoading, $ionicPopup, $window){
	
	vm = this;

	vm.user = $localStorage.user;

	$localStorage.typeDelivery = 1;

	vm.userNewAddress = {};

	vm.updateAddress = function(){

		$ionicLoading.show({
		    content: 'Carregando...',
			animation: 'fade-in',
			noBackdrop: false
		});
		
		if(!vm.userNewAddress.address || vm.userNewAddress.address == '' || !vm.userNewAddress.phone || vm.userNewAddress.phone == ''){
			
			$ionicLoading.hide();

			$ionicPopup.alert({

		     	title: 'Campo obrigatório',

		     	template: 'É necessário o preenchimento de todos os campos para concluirmos a atualização.'

		   	});

		}else{

			$ionicLoading.hide();

			$localStorage.user.address = vm.userNewAddress.address;

			$localStorage.user.phone = vm.userNewAddress.phone;

			$window.location.href = '#/app/delivery';

	    }
	}

	$localStorage.origin = 'location';

});
