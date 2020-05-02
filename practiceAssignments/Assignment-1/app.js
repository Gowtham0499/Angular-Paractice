(function(){

  angular.module('LunchCheck', [])
    .controller('LunchCheckController', LunchCheckController);

    LunchCheckController.$inject = ['$scope'];

    function LunchCheckController($scope){
      $scope.lunchMenu = '';
      $scope.message = '';

      $scope.checkMenu = function(){
        var menu = $scope.lunchMenu;
        var menuArray = menu.split(',');
        console.log(menuArray);
        var count = 0;
        for(var i=1; i<=menuArray.length; i++){
          if(menuArray[i]!=null){
            count+=1;
          }
        }
        console.log(count);
        if(count<4){
          $scope.message = "Enjoy!";
        } else {
          $scope.message = "Too Much!";
        }
      }
    }

})();
