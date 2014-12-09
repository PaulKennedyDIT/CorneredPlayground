'use strict';

/**
 * @ngdoc function
 * @name corneredPlaygroundApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the corneredPlaygroundApp
 */
angular.module('corneredPlaygroundApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
