'use strict';

angular.module('myApp.controllers')

.controller('SeasonStatsCtrl', ['$scope', '$http', '$log', '$routeParams', function($scope, $http, $log, $routeParams) {

  var pid = $routeParams.player;
  var tid = $routeParams.team;

  if (pid != null) {
    $scope.loading = true;
    $http.get('player_season_stats?includes=player,club&limit=200&playerId=' + pid)
    .success(function(data) {
      $log.debug(data);
      $scope.players = data;
      $scope.loading = false;
    });

    $http.get('players/' + pid + "?")
    .success(function(data) {
      $log.debug(data);
      $scope.player = data;
    });
  }

  if (tid != null) {
    $scope.loading = true;
    $http.get('players?includes=team,club&limit=1000&teamId=' + tid)
    .success(function(data) {
      $log.debug(data);
      $scope.members = data;
      $scope.loading = false;
    });

    $http.get('teams/' + tid + '?')
    .success(function(data) {
      $log.debug(data);
      $scope.team = data;
      $scope.loading = false;
    });

  }

}]);
