var app = angular.module("quizGeneratorApp");
app.controller("createQuestionsCtrl", ["$scope", "$http", "toastr", function($scope, $http, toastr) {
    $scope.type = 0; // Question Type = "True or False";
    $scope.questionData;
    $scope.onChange = function(type) {
        $scope.type = type;
    }
    $scope.validateData = function() {

        $scope.$broadcast('validateData', $scope.type);
    }
    $scope.sendData = function(event, data) {
        console.log(data);
    }
    $scope.$on("sendData", $scope.sendData)

}]);
