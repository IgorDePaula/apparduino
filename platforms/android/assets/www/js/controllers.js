angular.module('starter.controllers', [])

        .controller('DashCtrl', function($scope,$http) {
            $scope.ledlist = [
                {
                    led: 'led 1',
                    ativo: false,
                    id:1
                },
                {
                    led: 'led 2',
                    ativo: false,
                    id:2
                }
            ];
            $scope.muda = function(item){
              if(item.id==1){
                  if(item.ativo){
                       $http.get('http://192.168.1.200/?led=on');
                  }
                  else
                  {
                       $http.get('http://192.168.1.200/?led=off'); 
                  }
              }
              else{
                   if(item.ativo){
                       $http.get('http://192.168.1.200/?led2=on');
                  }
                  else
                  {
                     $http.get('http://192.168.1.200/?led2=off'); 
                  }
              }
            }
        })

        .controller('FriendsCtrl', function($scope, Friends) {
            $scope.friends = Friends.all();
        })

        .controller('FriendDetailCtrl', function($scope, $stateParams, Friends) {
            $scope.friend = Friends.get($stateParams.friendId);
        })

        .controller('AccountCtrl', function($scope) {
        });
