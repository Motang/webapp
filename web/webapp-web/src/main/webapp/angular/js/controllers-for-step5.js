'use strict';

/* Controllers */

var phonecatApp = angular.module('phonecatApp', []);

phonecatApp.controller('PhoneListCtrl', function($scope, $http) {
	$http.get('data/phones.json').success(function(data) {
		    $scope.phones = data;
		  });

	$scope.orderProp = 'age';
})

/*function PhoneListCtrl($scope, $http) {
  $http.get('phones/phones.json').success(function(data) {
    $scope.phones = data;
  });

  $scope.orderProp = 'age';
}
PhoneListCtrl.$inject = ['$scope', '$http'];*/
