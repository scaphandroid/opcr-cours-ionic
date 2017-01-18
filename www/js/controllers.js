angular.module('starter.controllers', [])

.controller('DashCtrl', function ($scope) {})

.controller('ChatsCtrl', function ($scope, Chats) {
    // With the new view caching in Ionic, Controllers are only called
    // when they are recreated or on app start, instead of every page change.
    // To listen for when this page is active (for example, to refresh data),
    // listen for the $ionicView.enter event:
    //
    //$scope.$on('$ionicView.enter', function(e) {
    //});

    $scope.chats = Chats.all();
    $scope.remove = function (chat) {
        Chats.remove(chat);
    };
})

.controller('ChatDetailCtrl', function ($scope, $stateParams, Chats) {
    $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function ($scope, $ionicModal) {
    $scope.settings = {
        enableFriends: false
    };
    $scope.list = [
        {
            id: 1,
            title: 'Titre 1'
            },
        {
            id: 2,
            title: 'Titre 2'
            },
        {
            id: 3,
            title: 'Titre 3'
            },
        {
            id: 4,
            title: 'Titre 4'
            },
        {
            id: 5,
            title: 'Titre 5'
            },
        {
            id: 6,
            title: 'Titre 6'
            },
    ];
    $ionicModal.fromTemplateUrl('templates/login.html', {

        scope: $scope,

        animation: 'slide-in-up'

    }).then(function (modal) {

        $scope.loginModal = modal;

    });
})

.controller('PopUpCtrl', function ($scope, $ionicPopup) {

    $scope.showPopup = function () {
        $scope.data = {};

        //pop up perso
        var myPopUp = $ionicPopup.show({
            template: '<input type="password" ng-model="data.wifi">',
            title: 'Saisir le mot de passe Wi-Fi',
            scope: $scope,
            buttons: [
                {
                    text: 'Annuler'
                },
                {
                    text: '<b>Enregistrer</b>',
                    type: 'button-positive',
                    onTap: function (e) {
                        if (!$scope.data.wifi) {
                            e.preventDefault();
                        } else {
                            return $scope.data.wifi;
                        }
                    }
                }
            ]
        });

        myPopUp.then(function (res) {
            console.log('Saisi!', res);
        });

        $timeout(function () {
            myPopup.close();
        }, 3000);
    };

    $scope.showConfirm = function () {
        var confirmPopup = $ionicPopup.confirm({
            title: 'Défi',
            template: 'Prêt à passer au niveau supérieur ?'
        });

        confirmPopup.then(function (res) {
            if (res) {
                console.log('c\'est partit !');
            } else {
                console.log('petit joueur !');
            }
        });
    };
    
    $scope.showAlert = function() {
        var alertPopup = $ionicPopup.alert({
            title: 'Alerte !',
            template: 'N\'y allez pas !'
        })
        
        alertPopup.then(function (res ) {
            console.log('ouf');
        })
    };
    
    $scope.info = {
        platform: ionic.Platform.platform(),
        version: ionic.Platform.version()
    };

})