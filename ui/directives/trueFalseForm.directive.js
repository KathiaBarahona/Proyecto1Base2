var app = angular.module("quizGeneratorApp");
app.directive('truefalseform',function(){
	return {
		restrict: "E",
		templateUrl: "ui/views/trueFalseForm.view.html",
		controller: "trueFalseFormCtrl"
	}
});