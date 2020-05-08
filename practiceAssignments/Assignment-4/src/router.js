(function(){
    'use strict';

    angular.module('MenuApp')
        .config(RoutesConfig);
    
    RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
    function RoutesConfig($stateProvider, $urlRouterProvider){

        $urlRouterProvider.otherwise('/');

        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: 'src/templates/hometemplate.html'
            })
            .state('categories', {
                url: '/categories',
                templateUrl: 'src/templates/categoriesList.html',
                controller: 'CategoriesController as controller',
                resolve: {
                    categories: ['MenuDataService', function(MenuDataService){
                        return MenuDataService.getAllCategories();
                    }]
                }
            })
            .state('items', {
                url: '/items/{category}',
                templateUrl: 'src/templates/itemsList.html',
                controller: 'ItemsListController as listcontroller',
                resolve: {
                    items: ['$stateParams', 'MenuDataService', function($stateParams, MenuDataService){
                        return MenuDataService.getItemsForCategory($stateParams.category);
                    }]
                }
            })
    }

})();