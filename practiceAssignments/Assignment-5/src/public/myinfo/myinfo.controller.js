(function () {
    angular.module('public')
        .controller('MyInfoController', MyInfoController);

    MyInfoController.$inject = ['SignUpService', 'MenuService', 'ApiPath'];
    function MyInfoController(SignUpService, MenuService, ApiPath) {
        var $ctrl = this;

        $ctrl.basePath = ApiPath;

        $ctrl.user = SignUpService.getSignedUsers();

        $ctrl.Item = [];

        if ($ctrl.user.length != 0) {
            var favItem = $ctrl.user[0].favouriteItem.replace(/[0-9]/g, '');
            $ctrl.shortName = favItem;
            $ctrl.getMenuItems = function () {
                var promise = MenuService.getMenuItems(favItem);
                promise.then(function (data) {
                    data.menu_items.forEach(item => {
                        if (item.short_name === $ctrl.user[0].favouriteItem){
                            $ctrl.Item.push(item);
                        }
                    });
                });
            };
            $ctrl.getMenuItems();
        }

        $ctrl.check = function () {
            if ($ctrl.user.length == 0) {
                return false;
            } else {
                return true;
            }
        }
    }
})();