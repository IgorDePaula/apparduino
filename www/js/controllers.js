angular.module('starter.controllers', [])

        .controller('DashCtrl', function($scope,$http) {
            $scope.ledlist = [
                {
                    led: 'led',
                    ativo: false,
                    alias:'led'
                },
                {
                    led: 'led 2',
                    ativo: false,
                   alias:'led2'
                }
            ];
            $scope.muda = function(item){
                var estado;
                estado = item.ativo?'on':'off';
                 $http.get('http://192.168.1.200/?'+item.alias+'='+estado);
            };
        })

        .controller('FriendsCtrl', function($scope, Friends) {
            $scope.friends = Friends.all();
        })

        .controller('FriendDetailCtrl', function($scope, $stateParams, Friends) {
            $scope.friend = Friends.get($stateParams.friendId);
        })

        .controller('AccountCtrl', function($scope) {
        });
