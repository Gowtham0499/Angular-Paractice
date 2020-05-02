(function(){
    'use strict';

    //Register angular module and controllers
    angular.module('angularconcepts', [])
      .controller('myController', myController)
      .filter('loves', hateFilter)
      // this is used in view so no need to inject
      .filter('replace', replaceFilter);

    // to eleminate Minifying problems
    // Injecting is like Inversion of Contol and instantiates objects
    //loves is a custom filter; Filter need to be added defaukt
    myController.$inject = ['$scope', '$filter', 'lovesFilter'];

    function myController($scope, $filter, lovesFilter){
      //send data to view
      $scope.message = 'I love to code!!';

      $scope.messageUpper = function() {
        var msg = "I love to code!!";
        var output = $filter('uppercase')(msg);
        return output;
      };

      $scope.hatemessage = function() {
        var msg = "I love to code!!";
        var hatemessageoutput = lovesFilter(msg);
        return hatemessageoutput;
      };
    }

    //creating a custom filter which returns a method
    function hateFilter(){
      return function(input){
          input = input || "";
          input = input.replace("love","hate");
          return input;
      }
    };

    //custom filter with arguments
    function replaceFilter(){
        return function(input, target, replace){
          input = input || "";
          input = input.replace(target, replace);
          return input;
        };
    }
})();
