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
        var count = 0;
        menuArray.forEach((item) => {
          if(item!=""){
            ++count;
          }
        });
        if(count<4){
          $scope.message = "Enjoy!";
        } else {
          $scope.message = "Too Much!";
        }
      }
    }

})();
