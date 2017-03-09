angular.module('myApp').controller('myCtrl', function($scope, myService) {
  $scope.getShips = function() {
    myService.getShips().then(function(response){
      console.log(response)
    $scope.ships = response.data.results
  });
}

$scope.getShips();

  $scope.getPlanets = function() {
    myService.getPlanets().then(function(results){
      console.log(results)
      $scope.planets = results.data.results
    });
  }

  $scope.getPlanets();



});
