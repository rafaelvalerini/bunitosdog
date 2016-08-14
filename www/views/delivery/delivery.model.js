angular.module('starter').factory('DeliveryModel', function($log, $localStorage){

	return {
	    order: function() {

	    	var products = [];

			$localStorage.cart.forEach(function(c){

					products.push(
					
							{
								id: c.product.id, 
								name: c.product.name, 
								menu: {id: c.menu.id, name: c.menu.name}, 
								quantity: c.quantity, 
								value_total: c.total,
								additionals: c.additional,
								obs: c.obs,
								options: c.options
							}

					)

			}); 

	    	var model = {
	    					address: $localStorage.user.address,
	    					phone: $localStorage.user.phone,
	    					type_delivery: $localStorage.typeDelivery,
	    					id_seller: 1, 
	    					user: {id: $localStorage.user.id, name: $localStorage.user.name, address: $localStorage.user.address, phone: $localStorage.user.phone},
	    					id_store: $localStorage.store,
	    					products: products,
	    					total_value: $localStorage.totalCart,
	    					obs: $localStorage.cartObservation,
	    					status: 1,
	    					payment: $localStorage.payment
	    				};

	    	return model;
        }

	};

});