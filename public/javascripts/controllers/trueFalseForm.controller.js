var app = angular.module("quizGeneratorApp");
app.controller("trueFalseFormCtrl", ['$scope', '$http', 'toastr', function($scope, $http, toastr) {
    $('select').material_select();
    $scope.validateQuestionData = function(event, data) {
        if (event && data === 0) {
            var question = $(".tf-form-wrapper .question-wrapper textarea").val();
            var answer = $(".tf-form-wrapper select").val();
            if (question.match(/[\w\d]/g) === null) {
                toastr.warning('La pregunta no puede estar vacía', "Warning", {
                    timeOut: 1000
                });
                return false;
            }
            if (answer === "") {
            	 toastr.warning('La respuesta no puede estar vacía', "Warning", {
                    timeOut: 1000
                });
                return false;
            }
            $scope.$emit('sendData', $scope.getData());
        }
    }
    $scope.getData = function() {
        var questionData = {};
        questionData.question = $(".tf-form-wrapper .question-wrapper textarea").val();
        questionData.type = 0;
        questionData.answer = $(".tf-form-wrapper select").val();
        return questionData;
    }
    $scope.$on('validateData', $scope.validateQuestionData);
}]);
