'use strict';

angular.module('myApp.controllers')
  .controller('PlayersCtrl', ['$scope', '$http', '$log', function($scope, $http, $log) {

    $http.get('players?includes=team,club&limit=1000&sort=teamId')
    .success(function(data) {
      $log.debug(data);
      $scope.players = data;
    });

    $scope.criteriaMatch = function( criteria ) {
      return function( item ) {

        if ($scope.query == null || $scope.query.length <= 1) return true;

        return (item.lastName.indexOf($scope.query) > -1)
          || (item.firstName.indexOf($scope.query) > -1)
          || (item.team.name.indexOf($scope.query) > -1)
      };
    };

  }]);
