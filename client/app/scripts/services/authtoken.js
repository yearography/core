'use strict';

/**
 * @ngdoc service
 * @name clientApp.authToken
 * @description
 * # authToken
 * Factory in the clientApp.
 */
angular.module('clientApp')
  .factory('authToken', function ($window) {
    var storage = $window.localStorage;
    var cachedToken;
    var userToken = 'userToken';

    var authToken = {
      setToken: function(token) {
        cachedToken = token;
        storage.setItem(userToken, token);
      },
      getToken: function() {
        if (!cachedToken) {
          cachedToken = storage.getItem(userToken);
        }
        return cachedToken;
      },
      isAuthenticated: function() {
        return !!this.getToken();
      },
      removeToken: function() {
        cachedToken = null;
        storage.removeItem(userToken);
      }
    };

    return authToken;
  });
