'use strict';

/* Filters */

angular.module('myApp.filters', []).

  filter('hideZeros', function() {
    return function(number) {

      return (number > 0) ? number : "";

    };

  });
