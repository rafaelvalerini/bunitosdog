angular.module('starter')

.controller('NewUserCtrl', function($scope, $stateParams, $ionicPopup, $window, $localStorage, $ionicLoading, User){

	vm = this;

	vm.user = {};

	vm.confirmPassword = '';

	vm.save = function(){

		$ionicLoading.show({
		    content: 'Carregando...',
			animation: 'fade-in',
			noBackdrop: false
		});

		if(!vm.user.name || vm.user.name == '' || !vm.user.address || vm.user.address == '' ||
			!vm.user.user || vm.user.user == '' || !vm.user.phone || vm.user.phone == '' ||
			!vm.user.password || vm.user.password == '' || !vm.confirmPassword || vm.confirmPassword == '' ||
			vm.user.password != vm.confirmPassword){

			$ionicLoading.hide();

			$ionicPopup.alert({

		     	title: 'Campo Obrigatório',

		     	template: 'É necessário preencher todos os campos do formulário, exceto o CPF, para concluir seu cadastro'

		   	});

		}else{

			if(vm.user.cpf){

				if(!isValid(vm.user.cpf)){

					$ionicLoading.hide();

					$ionicPopup.alert({

				     	title: 'CPF inválido',

				     	template: 'É necessário preencher o campo CPF com um valor válido. Corrija o CPF e tente novamente.'

				   	});

				   	return
				}
			}

			User.save(vm.user).then(function(response) {

				vm.user.id = response.Value;

	     		$localStorage.user = vm.user;

	     		$ionicLoading.hide();

	           	var confirmPopup = $ionicPopup.alert({

			     	title: 'Cadastro efetuado com sucesso',

			     	template: 'Fizemos seu cadastro. Agora é só clicar no botão OK que iremos redireciona-lo.'

			   	});

			   	confirmPopup.then(function(res) {

			     	if(res) {

			     		if($localStorage.origin == 'stores'){

				 			$window.location.href = '#/app/delivery';

				 		}else if($localStorage.origin != 'stores' && $localStorage.origin != 'payments'){

				     		$window.location.href = '#/app/menu';

				 		}else{

				 			$window.location.href = '#/app/location';

				 		}

			     	}

			   	});

	        })
	        .catch(function(error) {

	        	$ionicLoading.hide();

	        	$ionicPopup.alert({

			     	title: 'Não foi possível concluir seu cadastro',

			     	template: 'Estamos com alguns problemas para efetuar seu cadastro. Verifique sua conexão com a internet e tente novamente.'

			   	});

	    	});
	    }

	}

	$localStorage.origin = 'newuser';

});
