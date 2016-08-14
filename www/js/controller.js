angular.module('starter').controller('AppCtrl', function($log, $scope, $ionicLoading, $localStorage, Stores, $rootScope){
	
	$ionicLoading.show({
	    content: 'Carregando...',
		animation: 'fade-in',
		noBackdrop: false
	});

	ionic.Platform.ready(function(){
	});

	if(ionic.Platform.isIOS() || ionic.Platform.isIPad()){
		$rootScope.platform = 'IOS';
	}else{
		$rootScope.platform = 'ANDROID';
	}

	Stores.all().then(function(response) {

 		$ionicLoading.hide();

 		if(response.length > 0){

 			response.forEach(function(e){

	    		var opened = false;

	    		var hoje = new Date();
						
				var dia = hoje.getDay();

				if(e.officeHours && e.officeHours.length > 0){

					var officeHoursBoolean = Stores.getStatus(e.officeHours);

					if(officeHoursBoolean){
						e.officeHours.OpenClose = 'Aberto';
						e.open = true;
					}else{
						e.officeHours.OpenClose = 'Fechado';
					}

				}else{

					e.officeHours = [];

					e.officeHours.OpenClose = 'Fechado';

				}

				if(e.officeHoursDelivery && e.officeHoursDelivery.length > 0){

					var officeDeliveryHoursBoolean = Stores.getStatus(e.officeHoursDelivery);

					if(officeDeliveryHoursBoolean){
						e.officeHoursDelivery.OpenClose = 'Aberto';
					}else{
						e.officeHoursDelivery.OpenClose = 'Fechado';
					}

				}else{

					e.officeHoursDelivery = [];

					e.officeHoursDelivery.OpenClose = 'Fechado';

				}

				if(e.officeHoursPickupStore && e.officeHoursPickupStore.length > 0){

					var officePickupStoreHoursBoolean = Stores.getStatus(e.officeHoursPickupStore);

					if(officePickupStoreHoursBoolean){
						e.officeHoursPickupStore.OpenClose = 'Aberto';
					}else{
						e.officeHoursPickupStore.OpenClose = 'Fechado';
					}

				}else{

					e.officeHoursPickupStore = [];

					e.officeHoursPickupStore.OpenClose = 'Fechado';

				}

			});

		}
		
		$localStorage.stores = response;

    })
    .catch(function(error) {

    	$ionicLoading.hide();

	});

});
