(function () {
  'use strict';

  angular.module('ShortUploads', [])

  .controller('AuthController', ['$scope', '$log', '$http', '$timeout',
    function($scope, $log, $http, $timeout) {
      $scope.getResults = function() {
        $log.log("test");

        var name = $scope.name;
        var email = $scope.email;
        var password = $scope.password;

	    $http.post('/signup', {"name": name,"email": email,"password": password}).
	      success(function(results) {
	        $log.log(results);
          $scope.result = results;
	      }).
	      error(function(error) {
	        $log.log(error);
          $scope.result = error;
	      });
      };
    }
  ]);

}());