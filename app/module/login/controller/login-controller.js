'use strict'

 blogAppModule.controller('loginController' ,['$scope','$rootScope', '$state',
     function loginController($scope, $rootScope, $state){
     $scope.usersData =[
         {
                    "username" :"deepalik",
                    "password": "deepali123",
                    "usertype": "writer"
        },
        {
                    "username" :"deepalireader",
                    "password": "reader123",
                    "usertype": "reader"
        }];
     $scope.username ='';
     $scope.password = '';
     $scope.loginError =false;
     $scope.validateLogin = function(){
          for(var x in $scope.usersData){
              if ($scope.username == $scope.usersData[x].username && $scope.password == $scope.usersData[x].password) {
                 $rootScope.user = $scope.usersData[x];
                 $state.go('blogs');
                  break;
              }
              else {
                  if(x == ($scope.usersData).length-1){
                    $scope.loginError =true;
                  }
                  else;
              }
            }
     }
  }]
);