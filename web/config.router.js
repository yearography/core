angular.module('yearography')

.config(['$routeProvider',
  function ($routeProvider) {
      $routeProvider.
        when('/upload', {
            templateUrl: 'views/upload.html',
            controller: 'uploadController'
        }).
        when('/viewyear', {
            templateUrl: 'views/viewyear.html',
            controller: 'viewyearearController'
        }).
        otherwise({
            redirectTo: '/'
        });
  }]);