angular.module('starter.services', [])

.factory('Chats', function() {
  // Might use a resource here that returns a JSON array

  return {
    all: function() {
      return chats;
    },
    remove: function(chat) {
      chats.splice(chats.indexOf(chat), 1);
    },
    get: function(chatId) {
      for (var i = 0; i < chats.length; i++) {
        if (chats[i].id === parseInt(chatId)) {
          return chats[i];
        }
      }
      return null;
    }
  };
}).factory('Athletes', function($http) {
      // Might use a resource here that returns a JSON array

      var athletes = $http.get('data/athletes.json');

      return {
        getAthletes: function (callback) {
          athletes.success(callback);
        },
        get: function(athletes, chatId) {
          for (var i = 0; i < athletes.length; i++) {
            if (athletes[i].id === parseInt(chatId)) {
              return athletes[i];
            }
          }
          return null;
        }
      }

    }).factory('Wods', function($http) {
      // Might use a resource here that returns a JSON array

      var wods = $http.get('data/wods.json');

      return {
        getWods: function (callback) {
          wods.success(callback);
        },
        get: function(wods, chatId) {

          for (var i = 0; i < wods.length; i++) {

            if (wods[i].id === parseInt(chatId)) {
              return wods[i];
            }
          }
          return null;
        }
      }

    });
