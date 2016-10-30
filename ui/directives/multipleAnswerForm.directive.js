var app = angular.module("quizGeneratorApp");
app.directive('multipleanswerform',function(){
	return {
		restrict: "E",
		templateUrl: "ui/views/multipleAnswerForm.view.html",
		controller: "multipleAnswerFormCtrl"
	}
});