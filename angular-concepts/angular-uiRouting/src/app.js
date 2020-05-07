(function(){

  angular.module('RoutingApp', ['ui.router']);

  angular.module('RoutingApp').config(RoutesConfig);

  RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
  function RoutesConfig($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/tab1');

    $stateProvider
      .state('/tab1', {
        url: 'tab1',
        template: '<h1>You are in Tab 1</h1>'
      })
      .state('/tab2', {
        url: 'tab2',
        template: '<h1>You are in Tab 2</h1>'
      })
  }

})();
