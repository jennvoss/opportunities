angular.module('jobapp', [])


.controller('mycontroller', function($scope, $http) {
  $http.get('https://raw.githubusercontent.com/mcelaney/opportunities/master/philadelphia.json').success(function(data) {
      $scope.listings = data;
  });
});

