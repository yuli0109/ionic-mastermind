angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal) {

  // These icon classes are for mapping the selected guesses to the UI
  $scope.icons = ['ion-social-apple', 'ion-social-android','ion-social-angular','ion-social-html5'];
  $scope.secret = [];

  // The current selected icon to assign to any clicked position.
  // TODO: Needs to be set when buttons in menu.html are clicked.
  $scope.selectedIcon = 0;
  $scope.switchIcon = switchIcon;

  function switchIcon(idx) {
    $scope.selectedIcon = idx;
  }

  function secretDigit(){
    return Math.floor(Math.random() * 4);
  }

  function createSecret() {
    for (var i = 0; i <= 3; i++) {
      $scope.secret.push(secretDigit());
    }
  }
  console.log($scope.secret);


  // TODO: You're going to need a data structure to hold a list of "turns";
  // and those "turns" are likely going to be objects...

  // Initialize game state
  $scope.newGame = function() {
    createSecret();
    console.log($scope.secret)
    // TODO: Set all data properties/structures to their beginning state
    $scope.turns = [];
    // var turn = {
    //         picks: [null, null, null, null],
    //         turnId: 0,
    //         score: {
    //           perfect: 0,
    //           almost: 0
    //         }
    // }
    $scope.turns.push({
      picks: [null, null, null, null],
      turnId: 0,
      score: {
        perfect: 0,
        almost: 0
      }
    });
  };

  // Run newGame() upon loading
  $scope.newGame();
  $scope.checkPicks = function(turn){
    console.log(turn)
  }
  /*
  TODO: Call this function when the user clicks a 'score' button.
        The 'score' button should remain disabled until all positions have a value.
        Maybe a button with an icon of a checkmark would be a good UI choice? Or,
        just use a small button with text of 'Score'?
  */
  $scope.scoreTurn = function() {
    // TODO: Score the turn

    // TODO: Show winModal IF turn is correct. Put line below in an if statement.
    // $scope.winModal.show();
  };

  $scope.disableButton = function() {
    return $scope.turns[$scope.turns.length - 1].picks.some(pick => pick === null);
  }

  $scope.checkScore = checkScore

  function checkScore() {
    console.log('Checking score....');
  }

  // Create the winner modal.
  $ionicModal.fromTemplateUrl('templates/winner.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.winModal = modal;
  });

  // TODO: Call this function from the 'Play Again!' button in winModal's html (winner.html)
  $scope.playAgain = function() {
    $scope.newGame();
    $scope.winModal.hide();
  };


});
