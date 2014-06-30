'use strict';

angular.module('myApp.controllers')

  .controller('MatchesCtrl', ['$scope', '$http', '$log', function($scope, $http, $log) {

    $http.get('matches?&limit=200&includes=home,away&sort=startTime,1')
    .success(function(data) {
      $log.debug(data);
      $scope.matches = data;
    });

    $scope.criteriaMatch = function( criteria ) {
      return function( item ) {

        if ($scope.query == null || $scope.query.length <= 1) return true;

        return false;
      };
    };

  }]);
