app.controller('DashBoardController', function ($scope, $ionicPopover, $ionicModal, $ionicBackdrop, $timeout, $window, $interval, $ionicPopup) {
  /* Socket init */

  $scope.messages = [];
  $scope.lasttwo = [];
  
  $scope.socketInit = function () {

    $scope.socket = io.connect('http://139.59.51.207:3000');
    //$scope.socket = io.connect('http://port-8080.chat-stack-shobhitchittora351100.codeanyapp.com/');
    $scope.id = '';

    $scope.socket.on('connect', function (msg) {
      console.log('Client has connected to the server!');
      $scope.socket.emit('little_newbie', 'shobhit');
    });

    $scope.username = 'shobhit';

    $scope.socket.on('message', function (message) {
      console.log('Received: ' + message);

      var n = message.indexOf('$$');

      var uname = message.slice(0, n);
      var msg = message.slice(n + 2);

      $scope.messages.push({
        name: uname,
        comment: msg
      });

      if ($scope.messages.length == 1) {
        $scope.lasttwo.push($scope.messages[0]);
      } else {
        $scope.lasttwo = [];
        $scope.lasttwo.push($scope.messages[$scope.messages.length - 2]);
        $scope.lasttwo.push($scope.messages[$scope.messages.length - 1]);
      }

      $scope.$apply();
    })

    $scope.socket.on('id', function (message) {
      $scope.id = message;
      alert($scope.id);
    });

  };

  $scope.sendMessage = function (data) {

    console.log('Sending : ' + data.comment);

    //Check for empty message
    if (typeof data.comment !== 'undefined' && typeof data.username !== 'undefined') {

      $scope.socket.emit('message', data.username + "$$" + data.comment);

    }

  };


});