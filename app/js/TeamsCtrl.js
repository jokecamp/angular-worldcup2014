'use strict';

angular.module('myApp.controllers')

.controller('TeamsCtrl', ['$scope', '$http', '$log', function($scope, $http, $log) {

  $http.get('teams?')
  .success(function(data) {
    $log.debug(data);
    $scope.teams = data;
  });

}]);
