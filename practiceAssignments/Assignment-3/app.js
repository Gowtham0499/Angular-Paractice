(function () {
  'use strict';

  angular.module('NarrowItDownApp', [])
    .controller('NarrowItDownController', NarrowItDownController)
    .service('MenuSearchService', MenuSearchService)
    .directive('foundItems', FoundItems);

  function FoundItems() {
    var ddo = {
      templateUrl: 'itemsloader.html',
      scope: {
        items: '<',
        title: '@title',
        onRemove: '&'
      },
      controller: FoundItemsDirectiveController,
      controllerAs: 'list',
      bindToController: true
    };

    return ddo;
  }

  function FoundItemsDirectiveController() {
    var foundItems = this;
  }

  NarrowItDownController.$inject = ['MenuSearchService'];
  function NarrowItDownController(MenuSearchService) {
    var controller = this;
    controller.search = '';
    controller.getMenuItems = function () {
      var promise = MenuSearchService.getMatchedMenuItems(controller.search);
      promise.then(function (data) {
        controller.items = data;
        console.log(data);
      });
    };

    controller.removeItem = function (index) {
      MenuSearchService.removeItem(index);
    };
  }

  MenuSearchService.$inject = ['$http'];
  function MenuSearchService($http) {
    var service = this;

    var found = [];

    service.getMatchedMenuItems = function (search) {
      return $http({
        method: 'GET',
        url: 'https://davids-restaurant.herokuapp.com/menu_items.json'
      }).then(function (response) {
        response.data.menu_items.forEach(item => {
          if (item.description.includes(search)) {
            found.push(item);
          }
        });
        return found;
      });
    };

    service.removeItem = function (index) {
      found.splice(index, 1);
    };
  }

})();
