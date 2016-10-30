var app = angular.module("quizGeneratorApp");
app.directive('truefalseform',function(){
	return {
		restrict: "E",
		templateUrl: "views/trueFalseForm.view.html",
		controller: "trueFalseFormCtrl"
	}
});