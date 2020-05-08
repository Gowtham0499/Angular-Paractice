(function(){

    angular.module('MenuApp')
        .component('categoriesList', {
            templateUrl: 'src/templates/listcategories.html',
            bindings: {
                categories: '<'
            }
        });

})();