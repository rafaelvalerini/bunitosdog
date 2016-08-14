angular.module('starter').factory('Menu', function(){
	
	var menus = [{
	    id: 1,
	    name: 'Light',
	    description: 'N°1 - Hot Dog',
	    logo: 'img/menu/1/principal.png',
	    additional: true,
	    products: [
	      	{
			    id : 1,
			    logo : "img/menu/1/1.png",
			},
			{
			    id : 2,
			    logo : "img/menu/1/2.png",
			}
	    ]
	  },
	  {
	    id: 2,
	    name: 'Tradicional',
	    description: 'N°2 - Hot Dog',
	    logo: 'img/menu/2/principal.png',
	    additional: true,
	     products: [
	      	{
			    id : 1,
			    logo : "img/menu/2/1.png",
			},
			{
			    id : 2,
			    logo : "img/menu/2/2.png",
			}
	    ]
	  },
	  {
	    id: 3,
	    name: 'Power',
	    description: 'N°3 - Hot Dog',
	    logo: 'img/menu/3/principal.png',
	    additional: true,
	     products: [
	      	{
			    id : 1,
			    logo : "img/menu/3/1.png",
			},
			{
			    id : 2,
			    logo : "img/menu/3/2.png",
			}
	    ]
	  },
	  {
	    id: 4,
	    name: 'Prensado',
	    description: 'N°4 - Dog na Chapa',
	    logo: 'img/menu/4/principal.png',
	    additional: true,
	    products: [
	      	{
			    id : 1,
			    logo : "img/menu/4/1.png",
			},
			{
			    id : 2,
			    logo : "img/menu/4/2.png",
			}
	    ]
	  },
	  {
	    id: 5,
	    name: 'Prime Cheddar',
	    description: 'N°5 - Dog na Chapa',
	    logo: 'img/menu/5/principal.png',
	    additional: false,
	    products: [
	      	{
			    id : 1,
			    logo : "img/menu/5/1.png",
			},
			{
			    id : 2,
			    logo : "img/menu/5/2.png",
			}
	    ]
	  },
	  {
	    id: 6,
	    name: 'Gourmet',
	    description: 'N°6 - Dog na Chapa',
	    logo: 'img/menu/6/principal.png',
	    additional: false,
	     products: [
	      	{
			    id : 1,
			    logo : "img/menu/6/1.png",
			},
			{
			    id : 2,
			    logo : "img/menu/6/2.png",
			}
	    ]
	  },
	  {
	    id: 7,
	    name: 'Bunitinhos Jr.',
	    description: 'Combo Bunitinhos Jr.',
	    logo: 'img/menu/7/principal.png',
	    additional: false,
	     products: [
	      	{
			    id : 1,
			    logo : "img/menu/7/1.png",
			}
	    ]
	  },
	  {
	    id: 8,
	    name: 'Acompanhamentos',
	    description: 'Tirinhas de Frango/Batata Frita/Salsicha Assada',
	    logo: 'img/menu/8/principal.png',
	    additional: false,
	    products: [
	      	{
			    id : 1,
			    logo : "img/menu/8/1.png",
			},
			{
			    id : 2,
			    logo : "img/menu/8/2.png",
			},
			{
			    id : 3,
			    logo : "img/menu/8/3.png",
			},
			{
			    id : 4,
			    logo : "img/menu/8/4.png",
			},
			{
			    id : 5,
			    logo : "img/menu/8/5.png",
			},
			{
			    id : 6,
			    logo : "img/menu/8/6.png",
			}
	    ]
	  },
	  {
	    id: 9,
	    name: 'Casquinhas',
	    description: 'Sorvetes',
	    logo: 'img/menu/9/principal.png',
	    additional: false,
	    products: [
	      	{
			    id : 1,
			    logo : "img/menu/9/1.png",
			},
			{
			    id : 2,
			    logo : "img/menu/9/2.png",
			},
			{
			    id : 3,
			    logo : "img/menu/9/3.png",
			}
	    ]
	  },
	  {
	    id: 10,
	    name: 'Sucos',
	    description: 'Sucos de frutas 400ml',
	    logo: 'img/menu/10/principal.png',
	    additional: false,
	    products: [
	      	{
			    id : 1,
			    logo : "img/menu/10/1.png",
			},
			{
			    id : 2,
			    logo : "img/menu/10/2.png",
			},
			{
			    id : 3,
			    logo : "img/menu/10/3.png",
			},
			{
			    id : 4,
			    logo : "img/menu/10/4.png",
			},
			{
			    id : 5,
			    logo : "img/menu/10/5.png",
			},
			{
			    id : 6,
			    logo : "img/menu/10/6.png",
			},
			{
			    id : 7,
			    logo : "img/menu/10/7.png",
			},
			{
			    id : 8,
			    logo : "img/menu/10/8.png",
			},
			{
			    id : 9,
			    logo : "img/menu/10/9.png",
			},
			{
			    id : 10,
			    logo : "img/menu/10/10.png",
			},
			{
			    id : 11,
			    logo : "img/menu/10/11.png",
			}
	    ]
	  },
	  {
	    id: 11,
	    name: 'Refrigerantes',
	    description: 'Coca-Cola/Fanta/Sprite/Kuat/Schweppes',
	    logo: 'img/menu/11/principal.png',
	    additional: false,
	    products: [
	      	{
			    id : 1,
			    logo : "img/menu/11/1.png",
			},
			{
			    id : 2,
			    logo : "img/menu/11/2.png",
			},
			{
			    id : 3,
			    logo : "img/menu/11/3.png",
			},
			{
			    id : 4,
			    logo : "img/menu/11/4.png",
			},
			{
			    id : 5,
			    logo : "img/menu/11/5.png",
			},
			{
			    id : 6,
			    logo : "img/menu/11/6.png",
			},
			{
			    id : 7,
			    logo : "img/menu/11/7.png",
			},
			{
			    id : 8,
			    logo : "img/menu/11/8.png",
			}
	    ]
	  },
	  {
	    id: 12,
	    name: 'Águas',
	    description: 'Águas com e sem gás',
	    logo: 'img/menu/12/principal.png',
	    additional: false,
	    products: [
	      	{
			    id : 1,
			    logo : "img/menu/12/1.png",
			},
			{
			    id : 2,
			    logo : "img/menu/12/2.png",
			}
	    ]
	  },
	  {
	    id: 13,
	    name: 'Cervejas',
	    description: 'Cervejas nacionais e importadas',
	    logo: 'img/menu/13/principal.png',
	    additional: false,
	    products: [
	      	{
			    id : 1,
			    logo : "img/menu/13/1.png",
			},
			{
			    id : 2,
			    logo : "img/menu/13/2.png",
			}
	    ]
	}
  ];

	return {
	    all: function() {
	      	return menus;
	    },
	    get: function(menu) {
		    for (var i = 0; i < menus.length; i++) {
		        if (menus[i].id === parseInt(menu)) {
		        	return menus[i];
		        }
		    }
	      	return null;
	    },
	    getProduct: function(menu, product){
	    	for (var i = 0; i < menus.length; i++) {
		        if (menus[i].id === parseInt(menu)) {
		        	for (var j = menus[i].products.length - 1; j >= 0; j--) {
			    		if(menus[i].products[j].id == product){
			    			return menus[i].products[j];
			    		}
			    	}
		        }
		    }
	    	return null;
	    }
	};

});