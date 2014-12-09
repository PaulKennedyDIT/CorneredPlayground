'use strict';

/**
 * @ngdoc function
 * @name corneredPlaygroundApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the corneredPlaygroundApp
 */
angular.module('corneredPlaygroundApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
