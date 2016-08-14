angular.module('starter').factory('User', function($http, $log, $localStorage, $q){

	var header = {'Authorization': 'c3cb59c7-b205-48e4-9f03-b23eb4258c5b'};

	return {
	    save: function(user) {

	    	var deferred = $q.defer();

	    	var req = {
	            method: 'POST',
	            url: 'http://52.87.63.135:7002/seller/2/consumers/post',
	            headers: header,
	            data: user
	        };

	    	$http(req).then(function(resp) {

			   deferred.resolve(resp.data);

			}, function(err) {

				deferred.reject(err);

			});

            return deferred.promise;
        },

	    auth: function(user, password, notification) {

	    	var deferred = $q.defer();

	    	var headers = {};
	    	headers['Content-Type'] = 'application/json';

	    	var params = {};
	    	if(notification){
				params['notification'] = notification
	    	}

	    	var req = {
	            method: 'GET',
	            url: 'http://52.87.63.135:7002/seller/2/user/'+user+'/password/'+password+'/consumer/get',
	            headers: headers,
	            params: params
	        };

		    $http(req).then(function(resp) {

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
