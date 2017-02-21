var app = angular.module('myModule', []);

app.controller('myController', function($scope){
 $scope.toDoList = ['Finish Lab', 'Go to gym', 'Make dinner', 'Do laundry'];

  $scope.addToDo = function(){
    $scope.toDoList.push($scope.newToDo)
    console.log($scope.toDoList);
  };


});
