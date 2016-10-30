var app = angular.module("quizGeneratorApp");
app.directive('multipleanswerform',function(){
	return {
		restrict: "E",
		templateUrl: "views/multipleAnswerForm.view.html",
		controller: "multipleAnswerFormCtrl"
	}
});