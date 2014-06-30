'use strict';


// Declare app level module which depends on filters, and services
var app = angular.module('myApp', [
  'ngRoute',
  'myApp.filters',
  'myApp.services',
  'myApp.directives',
  'myApp.controllers'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/players', {templateUrl: 'partials/players.html', controller: 'PlayersCtrl'});
  $routeProvider.when('/teams', {templateUrl: 'partials/teams.html', controller: 'TeamsCtrl'});
  $routeProvider.when('/matches', {templateUrl: 'partials/matches.html', controller: 'MatchesCtrl'});
  $routeProvider.when('/stats', {templateUrl: 'partials/seasonstats.html', controller: 'SeasonStatsCtrl'});
  $routeProvider.otherwise({redirectTo: '/'});
}]);

angular.module('myApp.controllers', []);

app.factory('apiInjector', ['$log', function($log) {
    var inj = {
        request: function(config) {

            $log.info(config);
            if (config.url.indexOf(".html") == -1) {

              // Using kimonolabs API.
              // https://www.kimonolabs.com/worldcup/docs#ListPlayers
              // you can get your own key by registering for a free acount.
              var apiKey = '***REDACTED***';

              var root = "http://worldcup.kimonolabs.com/api/";
              config.url = root + config.url + "&apikey=" + apiKey;
              config.url = config.url.replace('?&', '?');
            }

            $log.info(config.method + " " + config.url);

            return config;
        }
    };
    return inj;
}]);

app.config(['$httpProvider', function($httpProvider) {
    $httpProvider.interceptors.push('apiInjector');
}]);
