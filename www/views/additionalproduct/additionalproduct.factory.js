angular.module('starter').factory('AdditionalProduct', function($http, $log, $localStorage, $q, DeliveryModel){

    return {
	    all: function() {
	    	var deferred = $q.defer();

            $http.get('http://52.87.63.135:7002/seller/2/additionals/get')
                
                .then(function(resp) {

                   deferred.resolve(resp.data);

                }, function(err) {

                    deferred.reject(err);

                });

            return deferred.promise;
        },
        getOptions: function() {
            
            var deferred = $q.defer();

            $http.get('http://52.87.63.135:7002/seller/2/optionals/get')
                
                .then(function(resp) {

                   deferred.resolve(resp.data);

                }, function(err) {

                    deferred.reject(err);

                });

            return deferred.promise;
        }
	};

});
