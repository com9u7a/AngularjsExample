app.config(function($stateProvider, $urlRouterProvider) {
  

  $urlRouterProvider.otherwise("/datepicker");

  $stateProvider
    .state('footer', {
      abstract:true,
      templateUrl:"assets/partials/footer.html"
    })
    .state('datepicker', {
      url: "/datepicker",
      templateUrl:"assets/partials/datepicker.html"
    })
    .state('modals', {
      url: "/modals",
      templateUrl: "assets/partials/modals.html"
    })
    .state('misc', {
      url: "/misc",
      templateUrl: "assets/partials/misc.html"
    })
    .state('filters',{
      url:"/filters",
      templateUrl: "assets/partials/filters.html"
    });

});
