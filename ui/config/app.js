var app = angular.module("quizGeneratorApp", ['ui.router','ngAnimate', 'toastr']);
app.config(function(toastrConfig) {
  angular.extend(toastrConfig, {
    autoDismiss: false,
    containerId: 'toast-container',
    maxOpened: 0,    
    newestOnTop: true,
    positionClass: 'toast-bottom-right',
    preventDuplicates: false,
    preventOpenDuplicates: false,
    target: 'body'
  });
});

app.config(function($stateProvider, $urlRouterProvider) {

    $stateProvider.state('home', {
        url: "/home",
        templateUrl: "ui/views/home.view.html"
    });
    $stateProvider.state('createQuestions', {
        url: "/createQuestions",
        templateUrl: "ui/views/createQuestions.view.html"
    });
    $urlRouterProvider.otherwise("home");
});
