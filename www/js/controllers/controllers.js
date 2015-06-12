angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {})

.controller('ChatsCtrl', function($scope, $location, Chats, Athletes) {
        Athletes.getAthletes(function(result){ $scope.chats = result; });

        $scope.go = function ( path ) {
            $location.path( path );
        };

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
}).controller('WodCtrl', function($scope, $stateParams, Wods, Athletes) {
        $scope.$on("$ionicView.afterEnter", function() {
            Athletes.getAthletes(function (result) {
                $scope.wodTitle = Athletes.get(result, $stateParams.chatId).name+" 2014 wods";
                console.log($scope.athleteName);
            });
        });

        Wods.getWods(function(result){
            $scope.wods = result;
            angular.forEach($scope.wods, function(wod) {
                angular.forEach(wod.scores, function(score) {
                    if($stateParams.chatId == score.athleteId) {
                        wod.athleteScore = score;
                    }
                });
            });
        });
})





.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
