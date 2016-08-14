angular.module('starter').factory('Delivery', function($http, $log, $localStorage, $q){

	var header = {'Authorization': 'c3cb59c7-b205-48e4-9f03-b23eb4258c5b'};

	return {
	    save: function(card) {

	    	var req = {
		        url: 'http://52.87.63.135:7002/seller/2/consumer/'+$localStorage.user.id+'/orders/post',
		        method: 'POST',
		        data: card,
		        headers: header
		    };

	    	var deferred = $q.defer();

	    	$http(req).then(function(resp) {

				deferred.resolve(resp.data);

			}, function(err) {

				deferred.reject(err);

			});

            return deferred.promise;
        }
	};

});
