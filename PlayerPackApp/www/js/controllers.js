angular.module('app.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout, $http, $state) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  $scope.logout = function() {
    delete $localStorage.user_id;
    delete $localStorage.token;
    $scope.loggedIn = false;
  };

  // Perform the login action when the user submits the login form
  $scope.ppLogin = function() {
    $http.post("http://localhost:8080/api/login", { email: $scope.loginData.email, password: $scope.loginData.password }).then(function(result) {
      if (result.data.loginstatus == "success") {
            // successful login, in our example, we will just send an alert message
            //alert("Congrats, you logged in with user ID "+result.data.userid);
            $state.go('menu.profile');
          }
          else {
            // unsuccessful login.  In our example, we are just sending an alert message
            alert(result.data.message);
          }
        }, function(error) {
          alert("There was a problem getting your profile.  Check the logs for details.");
          console.log(error);
        });
  };

  // Perform the signup action when the user submits the login form
  $scope.ppSignup = function() {
    $http.post("http://localhost:8080/api/signup", { parent_name: $scope.loginData.parentname, email: $scope.loginData.email, password: $scope.loginData.password }).then(function(result) {
      if (result.data.loginstatus == "success") {
            // successful login, in our example, we will just send an alert message
            //alert("Congrats, you logged in with user ID "+result.data.userid);
            $state.go('menu.profile');
          }
          else {
            // unsuccessful login.  In our example, we are just sending an alert message
            alert(result.data.message);
          }
        }, function(error) {
          alert("There was a problem getting your profile.  Check the logs for details.");
          console.log(error);
        });
  };
})

.controller('loginCtrl', function($scope) {

})

.controller('joinCtrl', function($scope, $ionicModal, $timeout, $http, $state) {

})

.controller('cameraTabDefaultPageCtrl', function($scope) {

})

.controller('cartTabDefaultPageCtrl', function($scope) {

})

.controller('cloudTabDefaultPageCtrl', function($scope) {

})

.controller('profileCtrl', function($scope, $state) {

  $scope.updateProfile = function() {
    $http.post("http://localhost:8080/api/profile", { email: $scope.loginData.username, password: $scope.loginData.password }).then(function(result) {
      if (result.data.loginstatus == "success") {
            // successful login, in our example, we will just send an alert message
            //alert("Congrats, you logged in with user ID "+result.data.userid);
            $state.go('menu.cards');
          }
          else {
            // unsuccessful login.  In our example, we are just sending an alert message
            alert(result.data.message);
          }
        }, function(error) {
          alert("There was a problem getting your profile.  Check the logs for details.");
          console.log(error);
        });
  };
})

.controller('cardsCtrl', function($scope) {

})

.controller('tradesCtrl', function($scope) {

})
