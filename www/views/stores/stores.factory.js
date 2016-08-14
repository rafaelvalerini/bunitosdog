angular.module('starter').factory('Stores', function($log, $q, $http, $localStorage){
	
	return {
	    all: function() {

	    	var deferred = $q.defer();

		    $http.get('http://52.87.63.135:7002/seller/2/stores/get')

				.then(function(resp) {

					$localStorage.stores = resp.data;

					$log.debug($localStorage.stores);

				   	deferred.resolve(resp.data);

				}, function(err) {

					if(err.status === -1) {
	                    err.message = "Sistema indisponível (timeout)";
	                }

	                if(err.status > 400 && error.status < 500){
	                    err.message = 'Dados não encontrados.';
	                }

	                if(err.status > 500) {
	                    err.message = " Erro interno do servidor (500)";
	                }

					deferred.reject(err);

				});

			return deferred.promise;

	    },
	    get: function(id){
	    	var back;
	    	$localStorage.stores.forEach(function(e){
	    		if(e.id === id){
	    			back = e;
	    		}
	    	});
	    	return back;
	    },
	    getDataBase: function(idStore){

	    	var deferred = $q.defer();

		    $http.get('http://52.87.63.135:7002/seller/2/store/'+idStore+'/get')

				.then(function(resp) {

				   	deferred.resolve(resp.data);

				}, function(err) {

					if(err.status === -1) {
	                    err.message = "Sistema indisponível (timeout)";
	                }

	                if(err.status > 400 && error.status < 500){
	                    err.message = 'Dados não encontrados.';
	                }

	                if(err.status > 500) {
	                    err.message = " Erro interno do servidor (500)";
	                }

					deferred.reject(err);

				});

			return deferred.promise;

	    }, getStatus: function(officeHours){

    		var hoje = new Date();
					
			var dia = hoje.getDay();

			var openClosed = false;

			if(officeHours.length > 0){

				officeHours.forEach(function(h){


					if( (dia == 0 && h.dom) ||
	    					(dia == 1 && h.seg) ||
	    					(dia == 2 && h.ter) ||
	    					(dia == 3 && h.qua) ||
	    					(dia == 4 && h.qui) ||
	    					(dia == 5 && h.sex) ||
	    					(dia == 6 && h.sab)){

	    				var initHour = 0;

	    				var finalHour = 0;

	    				initHour = parseInt(h.initial_hour.replace(":", ""));

	    				finalHour = parseInt(h.final_hour.replace(":", ""));

	    				var hourActual = hoje.getMinutes(); 
				
						hourActual += ""; 

						while (hourActual.length < 2) {
						    hourActual = "0" + hourActual;
						}

			    		var hourActualComplete = parseInt(hoje.getHours() + '' + hourActual);

			    		if(hourActualComplete >= initHour && hourActualComplete <= finalHour){

			    			$log.debug('return true');

			    			openClosed = true;

			    		}

	    			}

				});

			}

			return openClosed;
	    }
	};

});