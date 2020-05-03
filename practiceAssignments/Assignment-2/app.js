(function(){
  'use strict';

  angular.module('ShoppingListCheckOff', [])
    .controller('ToBuyController', ToBuyController)
    .controller('AlreadyBoughtController', AlreadyBoughtController)
    .provider('ShoppingListCheckOffService', ShoppingListCheckOffServiceProvider);

    ToBuyController.$inject = ['ShoppingListCheckOffService'];

    function ToBuyController(ShoppingListCheckOffService){

      var toBuyList = this;
      toBuyList.items = ShoppingListCheckOffService.getToBuyList();
      console.log(toBuyList.items);
      toBuyList.addToBought = function(index){
          ShoppingListCheckOffService.addToBoughtList(index);
      };

    }

    AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];

    function AlreadyBoughtController(ShoppingListCheckOffService){

        var boughtList = this;
        boughtList.items = ShoppingListCheckOffService.getBoughtList();
        console.log(boughtList.items);

    }

    function ShoppingListCheckOffService(){
        var service = this;

        var toBuy = [
          { name: "Cookies", quantity: "10" },
          { name: "Chips", quantity: "5" },
          { name: "Milo", quantity: "10" },
          { name: "Coffee", quantity: "5" },
          { name: "Diary", quantity: "10" }
        ];

        var bought = [];

        service.getToBuyList = function() {
          return toBuy;
        }

        service.addToBoughtList = function (index) {
          var spliced = toBuy.splice(index, 1);
          bought.push(spliced[0]);
        }

        service.getBoughtList = function () {
          return bought;
        }
    }

    function ShoppingListCheckOffServiceProvider() {
    var provider = this;

    provider.$get = function() {
      var shoppingList = new ShoppingListCheckOffService();
      return shoppingList;
    };
  }

})();
