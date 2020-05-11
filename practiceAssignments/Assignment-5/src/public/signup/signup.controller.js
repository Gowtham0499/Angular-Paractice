(function(){
    angular.module('public')
        .controller('SignUpController', SignUpController);
    
    SignUpController.$inject = ['SignUpService', 'menuItems'];
    function SignUpController(SignUpService, menuItems) {
        var $ctrl = this;

        $ctrl.menuItems = menuItems;

        $ctrl.shortNames = [];

        $ctrl.menuItems.forEach(function(item) {
            $ctrl.shortNames.push(item.short_name);
        });

        $ctrl.submitted = false;

        $ctrl.user = {};

        $ctrl.submit = function(){
            $ctrl.submitted = true;
            SignUpService.putSignedUser($ctrl.user);
        };
    }
})();