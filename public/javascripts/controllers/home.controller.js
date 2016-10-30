var app = angular.module("quizGeneratorApp");
app.controller("homeCtrl", ['$scope', '$http', function($scope, $http) {
	$scope.adminPress = function(){
		localStorage.isAdminUser = true;
		window.location.href = "#/createQuestions"
	};
	$scope.userPress = function(){
		localStorage.isAdminUser = false;
		 window.location.href = "#/answerQuestions"
	};
}]);
