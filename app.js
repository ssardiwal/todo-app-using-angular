var app = angular.module("todoapp", [])
app.controller("todocontroller", function($scope) {
    $scope.todotasks = [];
    $scope.addtask = function() {
        $scope.todotasks.push($scope.title);
        $scope.title= "";
    }
    $scope.removetask = function() {
        $scope.todotasks.splice(this.$index, 1);
    }
});