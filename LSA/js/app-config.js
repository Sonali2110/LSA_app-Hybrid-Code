

app.run(['$rootScope', '$ionicPlatform', '$state', '$window', function ($rootScope, $ionicPlatform, $state, $window) {
  // bootstrap3 theme. Can be also 'bs2', 'default'
  $ionicPlatform.ready(function () {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    // if (window.cordova && window.cordova.plugins.Keyboard) {
    //   cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    // }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }




    /* resume session */

    // if($window.localStorage.getItem('currentUser')===null){
    //   $window.localStorage.setItem('currentUser','');
    // }

    // if($window.localStorage.getItem('currentUser') !== ''){
    //   var user = $window.localStorage.getItem('currentUser');
    //   loggedinuser.setLoginUser(user);
    //   $state.go('tabs.vitals');
    // }


  });
}]);

//app run over
//app config start                  
app.config(function ($stateProvider, $urlRouterProvider) {



  $stateProvider

    .state('tabs', {
      url: "/tab",
      abstract: true,
      templateUrl: "app/dash/dash.html",
      controller: 'DashBoardController'
    })

    .state('tabs.awards', {
      url: "/awards",
      cache: false,
      views: {
        'awards-tab': {
          templateUrl: "app/awards/awards.html",
          controller: 'AwardsController'
        }
      }
    })

    .state('tabs.awards.awarddetails', {
      url: "/details/:name",
      cache: false,
      views: {
        'awards-tab@tabs': {
          templateUrl: "app/awarddetails/awarddetails.html",
          controller: 'AwarddetailsController'
        }
      }
    })

    .state('tabs.chatbox', {
      url: "/chatbox",
      views: {
        'chatbox-tab': {
          templateUrl: "app/chatbox/chatbox.html",
          controller: 'ChatboxController'
        }
      }
    })

    .state('tabs.gallery', {
      url: "/gallery",
      views: {
        'gallery-tab': {
          templateUrl: "app/image-gallery/gallery.html",
          controller: 'GalleryController as galCtrl'
        }
      }
    })

    .state('tabs.gallery.galleryzoom', {
      url: "/zoom/:index",
      views: {
        'gallery-tab@tabs': {
          templateUrl: "app/gallery-zoom/galleryzoom.html",
          controller: 'GalleryzoomController as galzCtrl'
        }
      }
    })

    .state('mapview', {
      url: "/mapview",
      cache: false,
      templateUrl: "app/maps/maps.html",
      controller: 'MapsController'
    })



    ;


  $urlRouterProvider.otherwise('/tab/awards');


});





