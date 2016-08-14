angular.module('starter').factory('Orders', function($http, $q, $log, $localStorage){
	
	return {
	    get: function(profileId) {
		    
		    for (var i = 0; i < $localStorage.orders.length; i++) {
		    
		        if ($localStorage.orders[i].id === parseInt(profileId)) {
		        	
		        	return $localStorage.orders[i];

		        }

		    }

	      	return null;
	    },

	    findByConsumer: function(consumer){

	    	var deferred = $q.defer();

		    $http.get('http://52.87.63.135:7002/seller/2/consumer/'+consumer+'/orders/get')

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

	    }
	};

});