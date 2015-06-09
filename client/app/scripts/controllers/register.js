'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:RegisterCtrl
 * @description
 * # RegisterCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('RegisterCtrl', function ($scope, $http, authToken, $state) {
    $scope.submit = function() {

    	var url = "http://localhost:3000/api/register";
    	var user = {
    		email: $scope.email,
    		password: $scope.password
    	};

    	$http.post(url, user)
    	.success(function(res) {
    		console.log("post success");
            authToken.setToken(res.token);
            $state.go('app.register');
    	})
    	.error(function(err) {
    		console.log("post failure");
    	});
    }
  });
