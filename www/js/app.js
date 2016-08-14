angular.module('starter', ['ionic', 'ngStorage'])

.run(function($ionicPlatform, $localStorage, $ionicLoading, $http, $log, $ionicPopup) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
    if(window.cordova){

      var push = PushNotification.init({ "android": {"senderID": "570118062280", icon : "img/login.png"},

          "ios": {"alert": "true", "badge": "true", "sound": "true"}, "windows": {} } );

      push.on('registration', function(data) {

        if(!$localStorage.user || !$localStorage.user.id_notification || data.registrationId != $localStorage.notification){

          var headers = {};
          headers['Authorization'] = 'key=AIzaSyBwuOnBw-Mti-48TOdHd2rLZFdmJTK66jY';
          headers['Content-Type'] = 'application/json';

          var req = {
            method: 'POST',
            url: 'https://iid.googleapis.com/iid/v1/'+data.registrationId+'/rel/topics/allusers',
            headers: headers
          };

          $http(req).then(function(resp) {

            $ionicLoading.hide();

          }, function(err) {

            $ionicLoading.hide();

          });

          $localStorage.notification = data.registrationId;

          if($localStorage.user && $localStorage.user.id){

            $http.post('http://52.87.63.135:7002/seller/2/consumer/'+$localStorage.user.id+'/notification/update?notification=' + data.registrationId)
            .then(function(resp) {

              $localStorage.user = resp.data;

              $ionicLoading.hide();

            }, function(err) {

              $ionicLoading.hide();

            });

          }

        }else{

          $ionicLoading.hide();

        }

      });

      push.on('notification', function(data) {

        $ionicLoading.hide();

        var confirmPopup =  $ionicPopup.alert({

          title: 'Mensagem',

          template: data.message

        });

        confirmPopup.then(function(res) {
          $window.location.href = '#/app/menu';
        });

      });

      push.on('error', function(e) {

        $ionicLoading.hide();

      });

    }

    
  })
})
.config(function($stateProvider, $urlRouterProvider, $httpProvider, $ionicConfigProvider) {

  $ionicConfigProvider.views.maxCache(0);

  $httpProvider.defaults.useXDomain = true;

  $httpProvider.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded; charset=UTF-8';
  
  delete $httpProvider.defaults.headers.common['X-Requested-With'];
  
    $stateProvider
      .state('app', {
        url: '/app',
        abstract: true,
        templateUrl: 'template.html',
        controller: 'AppCtrl',
        controllerAs: 'appCtrl'
      })
      .state('app.login', {
        url: '/login/:id',
        views: {
          'menuContent': {
            templateUrl: 'views/login/login.html',
            controller: 'LoginCtrl',
            controllerAs: 'loginCtrl'
          }
        }
      })
      .state('app.typedelivery', {
        url: '/typedelivery',
        views: {
          'menuContent': {
            templateUrl: 'views/typedelivery/typedelivery.html',
            controller: 'TypeDeliveryCtrl',
            controllerAs: 'typedeliveryCtrl'
          }
        }
      })
      .state('app.menu', {
        url: '/menu',
        views: {
          'menuContent': {
            templateUrl: 'views/menu/menu.html',
            controller: 'MenuCtrl',
            controllerAs: 'menuCtrl'
          }
        }
      })
      .state('app.product', {
        url: '/menu/:menu/products',
        views: {
          'menuContent': {
            templateUrl: 'views/product/product.html',
            controller: 'ProductCtrl',
            controllerAs: 'productCtrl'
          }
        }
      })
      .state('app.companies', {
        url: '/menu/:menu/products/:product',
        views: {
          'menuContent': {
            templateUrl: 'views/companies/companies.html',
            controller: 'CompaniesCtrl',
            controllerAs: 'companiesCtrl'
          }
        }
      })
      .state('app.viewcompany', {
        url: '/company/:company',
        views: {
          'menuContent': {
            templateUrl: 'views/viewcompany/viewcompany.html',
            controller: 'ViewCompanyCtrl',
            controllerAs: 'viewCompanyCtrl'
          }
        }
      })
      .state('app.cart', {
        url: '/cart',
        views: {
          'menuContent': {
            templateUrl: 'views/cart/cart.html',
            controller: 'CartCtrl',
            controllerAs: 'cartCtrl'
          }
        }
      })
      .state('app.location', {
        url: '/location',
        views: {
          'menuContent': {
            templateUrl: 'views/location/location.html',
            controller: 'LocationCtrl',
            controllerAs: 'locationCtrl'
          }
        }
      })
      .state('app.quantity', {
        url: '/menu/:menu/product/:product/quantity',
        views: {
          'menuContent': {
            templateUrl: 'views/quantity/quantity.html',
            controller: 'QuantityCtrl',
            controllerAs: 'quantityCtrl'
          }
        }
      })
      .state('app.delivery', {
        url: '/delivery',
        views: {
          'menuContent': {
            templateUrl: 'views/delivery/delivery.html',
            controller: 'DeliveryCtrl',
            controllerAs: 'deliveryCtrl'
          }
        }
      })
      .state('app.orders', {
        url: '/orders',
        views: {
          'menuContent': {
            templateUrl: 'views/orders/orders.html',
            controller: 'OrdersCtrl',
            controllerAs: 'ordersCtrl'
          }
        }
      })
      .state('app.ordersproducts', {
        url: '/order/:order',
        views: {
          'menuContent': {
            templateUrl: 'views/orders/products/products.html',
            controller: 'ProductOrdersCtrl',
            controllerAs: 'pOrdersCtrl'
          }
        }
      })
      .state('app.stores', {
        url: '/stores/:id',
        views: {
          'menuContent': {
            templateUrl: 'views/stores/stores.html',
            controller: 'StoresCtrl',
            controllerAs: 'storesCtrl'
          }
        }
      })
      .state('app.newuser', {
        url: '/user',
        views: {
          'menuContent': {
            templateUrl: 'views/newuser/newuser.html',
            controller: 'NewUserCtrl',
            controllerAs: 'newUserCtrl'
          }
        }
      })
      .state('app.payments', {
        url: '/payments',
        views: {
          'menuContent': {
            templateUrl: 'views/payments/payments.html',
            controller: 'PaymentsCtrl',
            controllerAs: 'paymentsCtrl'
          }
        }
      })
      .state('app.my', {
        url: '/my',
        views: {
          'menuContent': {
            templateUrl: 'views/my/my.html',
            controller: 'MyCtrl',
            controllerAs: 'myCtrl'
          }
        }
      });

      $urlRouterProvider.otherwise('/app/menu');

  });


