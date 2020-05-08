(function(){

    angular.module('MenuApp')
        .controller('CategoriesController', CategoriesController);

    // If we want to use resolve property in routing
    // Which gets data before loading the page
    // CategoriesController.$inject = ['MenuDataService'];
    // function CategoriesController(MenuDataService) {
    CategoriesController.$inject = ['categories'];
    function CategoriesController(categories) {
        var controller = this;

        controller.categories = categories;

        // controller.items = [];
        
        // controller.$onInit = function () {
        //     MenuDataService.getAllCategories()
        //     .then(function (result) {
        //         controller.categories = result;
        //     });
        // };
    }

})();