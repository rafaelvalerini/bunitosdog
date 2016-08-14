angular.module('starter').controller('ProductCtrl', function($log, $scope, $ionicLoading, $window, $stateParams, $ionicPopup, $localStorage, Menu, Products){
	
	vm = this;

	vm.menu = Menu.get($stateParams.menu);

	$ionicLoading.show({
		    content: 'Carregando...',
			animation: 'fade-in',
			noBackdrop: false
		});

	Products.getByMenu($stateParams.menu).then(function(response) {

		if(response && response.length > 0){

			vm.menu.products.forEach(function(p){

				response.forEach(function(entity){

					if(p.id == entity.id){

						p.show = entity.active == 1?true:false;

						p.name = entity.name;

						p.description = entity.description;

						p.additionals = entity.additionals;

						p.options = entity.options;

						p.value = 'R$ ' + (parseFloat(entity.value_total.replace('R$', '').replace(' ', '').replace(',', '.')).toFixed(2)).replace('.',',');

						return;

					}

				})

			});

		}else{

			var confirmPopup = $ionicPopup.alert({
			     title: 'Produtos não encontrados',
			     template: 'Não encontramos nenhum produto habilitado para este menu.'
			});

			confirmPopup.then(function(res) {
			    $window.location.href = '#/app/menu';
			});

		}

 		$ionicLoading.hide();

    })
    .catch(function(error) {

    	$ionicLoading.hide();

    	var confirmPopup = $ionicPopup.alert({
		     title: 'Produtos não encontrados',
		     template: 'Não conseguimos encontrar produtos para este menu. Verifique sua conexão com a internet e tente novamente.'
		});

		confirmPopup.then(function(res) {
		    $window.location.href = '#/app/menu';
		});

	});

    vm.next = function(product){

    	$localStorage.product = product;

    	$window.location.href = '#/app/menu/' + vm.menu.id + '/product/'+product.id+'/quantity';

    }

	$localStorage.origin = 'product';

});
