var app = angular.module("quizGeneratorApp");
app.controller("multipleAnswerFormCtrl", ['$scope', '$http', 'toastr', function($scope, $http, toastr) {
    $scope.answerIndex = 2;
    $scope.answerWrapper = $(".ma-form-wrapper .answer-wrapper");
    $scope.addNewAnswer = function(index) {

        var row = document.createElement("div");
        var inputWrapper = document.createElement("div");
        var input = document.createElement("input");
        var rbButton = document.createElement("input");
        var label = document.createElement("label");
        var iconAdd = document.createElement("i");
        var iconRemove = document.createElement("i");
        row.className = "row";
        row.setAttribute("data-id", $scope.answerIndex);
        inputWrapper.classList = "input-field col s6";
        input.classList = "validate answer-input";
        input.setAttribute("type", "text");
        rbButton.setAttribute("name", "possibleAnswers");
        rbButton.className = "with-gap";
        rbButton.setAttribute("type", "radio");
        rbButton.setAttribute("id", "respuesta" + $scope.answerIndex);
        label.setAttribute("for", "respuesta" + $scope.answerIndex);
        iconAdd.classList = "material-icons";
        iconAdd.innerText = "add";
        $(iconAdd).bind("click", function() {
            $scope.addNewAnswer(this.parentNode.getAttribute("data-id"));
        });
        $(iconRemove).bind("click", function() {
            $scope.removeAnswer(this.parentNode.getAttribute("data-id"));
        });
        iconRemove.classList = "material-icons";
        iconRemove.innerText = "close";
        inputWrapper.appendChild(input);
        row.appendChild(inputWrapper);
        row.appendChild(rbButton);
        row.appendChild(label);
        row.appendChild(iconAdd);
        row.appendChild(iconRemove);
        $(row).insertAfter(".row[data-id='" + index + "']")
        $scope.answerIndex++;
    }
    $scope.removeAnswer = function(index) {
        var rowOptions = $scope.answerWrapper.find(".row");
        if (rowOptions.length !== 1) {
            $(".row[data-id='" + index + "']").remove();
        } else {

            toastr.warning('Debe de tener al menos una respuesta', "Warning", {
                timeOut: 1000
            });
        }


    }
    $scope.validateQuestionData = function(event, data) {
        if (event && data === 1) {
            var question = $(".ma-form-wrapper .question-wrapper textarea").val();
            var rowOptions = $scope.answerWrapper.find(".row");
            var answer;
            if (question.match(/[\w\d]/g) === null) {
                toastr.warning('La pregunta no puede estar vacía', "Warning", {
                    timeOut: 1000
                });
                return false;
            }
            for (var i = 0; i < rowOptions.length; i++) {
                answer = $(rowOptions[i]).find(".answer-input").val();

                if (answer.match(/[\w\d]/g) === null) {
                    toastr.warning('Las respuestas no pueden estar vacías', "Warning", {
                        timeOut: 1000
                    });
                    return false;
                }
            }
           $scope.$emit('sendData',$scope.getQuestionData());
        }
    }
    $scope.getQuestionData = function() {
        var questionData = {};
        var rowOptions = $scope.answerWrapper.find(".row");
        questionData.question = $(".ma-form-wrapper .question-wrapper textarea").val();
        questionData.type = 1;
        questionData.answers = [];
        var answer;
        for (var i = 0; i < rowOptions.length; i++) {
            answer = $(rowOptions[i]).find(".answer-input").val();
            if (answer.match(/[\w\d]/g) !== null) {
                questionData.answers.push(answer);
                if ($(rowOptions[i]).find(".with-gap")[0].checked) {
                    questionData.correctAnswer = questionData.answers.length - 1;
                }
            }
        }
      
        return questionData;


    }
    $scope.$on('validateData', $scope.validateQuestionData);
    


}]);
