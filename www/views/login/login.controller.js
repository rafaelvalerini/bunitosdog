angular.module('starter').controller('LoginCtrl', function($scope, $stateParams, $window, $ionicLoading, $ionicPopup, $log, $localStorage, $ionicLoading, User){
	
	vm = this;

	vm.user = {user: '', password: ''};

	if($stateParams.id == 1){

		$localStorage.typeDelivery = 1;

	}else if($stateParams.id == 3){

		$localStorage.typeDelivery = 2;

	}

	if($stateParams.id != 2 && $localStorage.user && $localStorage.user.id && $localStorage.user.user && $localStorage.user.user != ''
		&& $localStorage.user.address && $localStorage.user.address != '' 
		&& $localStorage.user.phone && $localStorage.user.phone != ''){

		if($localStorage.typeDelivery == 2){

 			$window.location.href = '#/app/delivery';

 		}else if($localStorage.typeDelivery == 1){

     		$window.location.href = '#/app/location';

 		}else{

 			$window.location.href = '#/app/menu';
 			
 		}

 		return;

	}

	vm.login = function(){

		$ionicLoading.show({
		    content: 'Carregando...',
			animation: 'fade-in',
			noBackdrop: false
		});

		if(!vm.user.user || vm.user.user == '' || !vm.user.password || vm.user.password == ''){
			
			$ionicLoading.hide();

			$ionicPopup.alert({

		     	title: 'Campo obrigatório',

		     	template: 'É necessário o preenchimento de todos os campos para efetuarmos o login.'

		   	});
		}else{

			User.auth(vm.user.user, vm.user.password, $localStorage.notification).then(function(response) {

				vm.user = response;

	     		$localStorage.user = vm.user;

	     		$ionicLoading.hide();

	     		if($localStorage.origin == 'stores'){

	     			$window.location.href = '#/app/delivery';

	     		}else if($localStorage.origin == 'payments'){

		     		$window.location.href = '#/app/location';

	     		}else{

	     			$window.location.href = '#/app/menu';
	     			
	     		}

	        })
	        .catch(function(error) {

	        	$ionicLoading.hide();

	        	$ionicPopup.alert({

			     	title: 'Não foi possível concluir seu login',

			     	template: 'Estamos com alguns problemas para efetuar o login. Verifique sua conexão com a internet e tente novamente'

			   	});

	    	});
	    }
	}

});
