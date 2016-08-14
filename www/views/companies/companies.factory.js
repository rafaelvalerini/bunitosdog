angular.module('starter').factory('Companies', function(){
	
	var companies = [
		{
		    id: 1,
		    name: 'Bar e Restaurante do Verão',
		    value : 'R$ 1,50',
		    lat: -20.5338601,
		    lng: -47.411603,
		    distance: '1.5Km',
		    Cards: {
				IsCheckedVisa: true,
				IsCheckedMaster: true,
				IsCheckedAmerican: true,
				IsCheckedElo: true,
				IsCheckedGoodcard: true,
				IsCheckedHipercard: true,
				IsCheckedMaestro: true,
				IsCheckedSodexo: true,
				IsCheckedVR: true,
				IsCheckedAlelo: true,
				IsCheckedDinersclub: true
			},
			Address: "Rua São Sebastião, 222 – Estação, Franca - SP",
			Description: "Traga sua família e venha curtir um momento de tranquilidade"
		},
		{
		    id: 2,
		    name: 'Distribuidora Vem Verão',
		    value : 'R$ 1,55',
		    lat: -20.5338601,
		    lng: -47.411603,
		    distance: '1.6Km',
		    Cards: {
				IsCheckedVisa: true,
				IsCheckedMaster: true,
				IsCheckedAmerican: true,
				IsCheckedElo: true,
				IsCheckedGoodcard: true,
				IsCheckedHipercard: true,
				IsCheckedMaestro: true,
				IsCheckedSodexo: true,
				IsCheckedVR: true,
				IsCheckedAlelo: true,
				IsCheckedDinersclub: true
			},
			Address: "Rua São Sebastião, 222 – Estação, Franca - SP",
			Description: "Traga sua família e venha curtir um momento de tranquilidade"
		},
		{
		    id: 3,
		    name: 'Buteco do Valtão',
		    value : 'R$ 1,60',
		    distance: '1.7Km',
		    Cards: {
				IsCheckedVisa: true,
				IsCheckedMaster: true,
				IsCheckedAmerican: true,
				IsCheckedElo: true,
				IsCheckedGoodcard: true,
				IsCheckedHipercard: true,
				IsCheckedMaestro: true,
				IsCheckedSodexo: true,
				IsCheckedVR: true,
				IsCheckedAlelo: true,
				IsCheckedDinersclub: true
			},
			Lat: -20.529448,
			Lng: -47.413596,
			Address: "Rua São Sebastião, 222 – Estação, Franca - SP",
			Description: "Traga sua família e venha curtir um momento de tranquilidade"
		},
		{
		    id: 4,
		    name: 'Buteco Santa Helena',
		    value : 'R$ 1,70',
		    lat: -20.5338601,
		    lng: -47.411603,
		    distance: '1.8Km',
		    Cards: {
				IsCheckedVisa: true,
				IsCheckedMaster: true,
				IsCheckedAmerican: true,
				IsCheckedElo: true,
				IsCheckedGoodcard: true,
				IsCheckedHipercard: true,
				IsCheckedMaestro: true,
				IsCheckedSodexo: true,
				IsCheckedVR: true,
				IsCheckedAlelo: true,
				IsCheckedDinersclub: true
			},
			Address: "Rua São Sebastião, 222 – Estação, Franca - SP",
			Description: "Traga sua família e venha curtir um momento de tranquilidade"
		},
		{
		    id: 5,
		    name: 'Bar e Restaurante do Tito',
		    value : 'R$ 1,80',
		    lat: -20.5338601,
		    lng: -47.411603,
		    distance: '1.9Km',
		    Cards: {
				IsCheckedVisa: true,
				IsCheckedMaster: true,
				IsCheckedAmerican: true,
				IsCheckedElo: true,
				IsCheckedGoodcard: true,
				IsCheckedHipercard: true,
				IsCheckedMaestro: true,
				IsCheckedSodexo: true,
				IsCheckedVR: true,
				IsCheckedAlelo: true,
				IsCheckedDinersclub: true
			},
			Address: "Rua São Sebastião, 222 – Estação, Franca - SP",
			Description: "Traga sua família e venha curtir um momento de tranquilidade"
		},
		{
		    id: 6,
		    name: 'Titos Rock Bar',
		    value : 'R$ 1,90',
		    lat: -20.5338601,
		    lng: -47.411603,
		    distance: '1.95Km',
		    Cards: {
				IsCheckedVisa: true,
				IsCheckedMaster: true,
				IsCheckedAmerican: true,
				IsCheckedElo: true,
				IsCheckedGoodcard: true,
				IsCheckedHipercard: true,
				IsCheckedMaestro: true,
				IsCheckedSodexo: true,
				IsCheckedVR: true,
				IsCheckedAlelo: true,
				IsCheckedDinersclub: true
			},
			Address: "Rua São Sebastião, 222 – Estação, Franca - SP",
			Description: "Traga sua família e venha curtir um momento de tranquilidade"
		},
		{
		    id: 7,
		    name: 'Pilsen MotorRock',
		    value : 'R$ 1,95',
		    lat: -20.5338601,
		    lng: -47.411603,
		    distance: '1.96Km',
		    Cards: {
				IsCheckedVisa: true,
				IsCheckedMaster: true,
				IsCheckedAmerican: true,
				IsCheckedElo: true,
				IsCheckedGoodcard: true,
				IsCheckedHipercard: true,
				IsCheckedMaestro: true,
				IsCheckedSodexo: true,
				IsCheckedVR: true,
				IsCheckedAlelo: true,
				IsCheckedDinersclub: true
			},
			Address: "Rua São Sebastião, 222 – Estação, Franca - SP",
			Description: "Traga sua família e venha curtir um momento de tranquilidade"
		},
		{
		    id: 8,
		    name: 'Brejeiros Bar',
		    value : 'R$ 1,50',
		    lat: -20.5338601,
		    lng: -47.411603,
		    distance: '1.96Km',
		    Cards: {
				IsCheckedVisa: true,
				IsCheckedMaster: true,
				IsCheckedAmerican: true,
				IsCheckedElo: true,
				IsCheckedGoodcard: true,
				IsCheckedHipercard: true,
				IsCheckedMaestro: true,
				IsCheckedSodexo: true,
				IsCheckedVR: true,
				IsCheckedAlelo: true,
				IsCheckedDinersclub: true
			},
			Address: "Rua São Sebastião, 222 – Estação, Franca - SP",
			Description: "Traga sua família e venha curtir um momento de tranquilidade"
		},
	];

	return {
	    all: function() {
	      	return companies;
	    },
	    get: function(profileId) {
		    for (var i = 0; i < companies.length; i++) {
		        if (companies[i].id === parseInt(profileId)) {
		        	return companies[i];
		        }
		    }
	      	return null;
	    }
	};

});