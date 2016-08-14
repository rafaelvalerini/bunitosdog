angular.module('starter').factory('Products', function($http, $log, $localStorage, $q){

	return {
	    getByMenu: function(menuId) {

	    	var deferred = $q.defer();

	    	$http.get('http://52.87.63.135:7002/seller/2/menu/' + menuId)
				
				.then(function(resp) {

				   deferred.resolve(resp.data);

				}, function(err) {

					deferred.reject(err);

				});

            return deferred.promise;
        }
	};

});
