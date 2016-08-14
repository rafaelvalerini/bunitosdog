angular.module('starter')

.controller('MyCtrl', function($scope, $stateParams, $ionicPopup, $window, $localStorage, $ionicLoading, User){

	vm = this;

	

	vm.confirmPassword = '';

	if(!$localStorage.user || !$localStorage.user.id){
		$window.location.href = '#/app/menu/2';
		return;
	}

	vm.user = $localStorage.user;

	vm.save = function(){

		$ionicLoading.show({
		    content: 'Carregando...',
			animation: 'fade-in',
			noBackdrop: false
		});

		if(!vm.user.name || vm.user.name == '' || !vm.user.address || vm.user.address == '' ||
			!vm.user.user || vm.user.user == '' || !vm.user.phone || vm.user.phone == ''){

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

			     	title: 'Alteração realizada com sucesso',

			     	template: 'Suas informações foram atualizadas com sucesso.'

			   	});

			   	confirmPopup.then(function(res) {

			     	if(res) {

			     		$window.location.href = '#/app/menu';

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
