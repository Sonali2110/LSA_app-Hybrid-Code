app.controller('AwardsController', function ($scope, $ionicPopover, $ionicModal, $ionicBackdrop, $timeout, $window, $interval, $ionicPopup) {
    $scope.imgsrc = 'assets/images/avatar.jpg';

    $scope.awardees = [
        {
            name: 'Shobhit Chittora',
            desc: 'He is awesome'
        },
        {
            name: 'Mahesh Kumawat',
            desc: 'okay'
        },
        {
            name:'Lorem',
            desc: 'ipsum'
        },
        {
            name:'Lorem',
            desc: 'ipsum'
        }
        
    ]

});