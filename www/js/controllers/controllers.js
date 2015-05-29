angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {})

.controller('ChatsCtrl', function($scope, Chats, Athletes) {
        Athletes.getAthletes(function(result){ $scope.chats = result; });


  $scope.launchAthleteBio = function(url){
            window.open(url) ;
        };
  //$scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  }
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Athletes, $sce) {
        Athletes.getAthletes(function(result){ $scope.chat = Athletes.get(result, $stateParams.chatId) });

        $scope.trustSrc = function(src) {
            return $sce.trustAsResourceUrl(src);
        }
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
