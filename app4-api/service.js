angular.module('myApp').service('myService', function($http) {

  this.getShips = function() {
    return $http({
      method: 'GET',
      url: "http://swapi.co/api/starships/?page=1"
    });
  };

  this.getPlanets = function() {
    return $http({
      method: 'GET',
      url: "http://swapi.co/api/planets/?page=1"
    });
  }

})

console.log()
