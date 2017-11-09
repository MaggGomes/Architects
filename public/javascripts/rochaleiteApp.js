var app = angular.module("rochaleiteApp", ["ngRoute","pascalprecht.translate","ngAnimate"]);

app.config(function ($translateProvider) {
    $translateProvider.translations('pt', {
        'PROJECTOS': 'projectos',
        'EQUIPA': 'equipa',
        'CONTACTOS': 'contactos',
        'REABILITACAO': 'reabilitação',
        'EQUIPAMENTOS': 'equipamentos',
        'HABITACAO': 'habitação',
        'CONCLUIDO': 'concluído',
        'EM_CONSTRUCAO': 'em construção',
        'NOME': 'nome',
        'E-MAIL': 'e-mail',
        'ASSUNTO': 'assunto',
        'MENSAGEM': 'mensagem',
        'ENVIAR': 'enviar'
    });
    $translateProvider.translations('en', {
        'PROJECTOS': 'projects',
        'EQUIPA': 'team',
        'CONTACTOS': 'contacts',
        'REABILITACAO': 'rehabilitation',
        'EQUIPAMENTOS': 'equipments',
        'HABITACAO': 'housing',
        'CONCLUIDO': 'completed',
        'EM_CONSTRUCAO': 'under construction',
        'NOME': 'name',
        'E-MAIL': 'e-mail',
        'ASSUNTO': 'subject',
        'MENSAGEM': 'message',
        'ENVIAR': 'send'
    });
    $translateProvider.preferredLanguage('pt');
});

app.config(function($routeProvider,$locationProvider) {
    $routeProvider
        .when("/", {
            templateUrl : "projects.htm",
            controller : "projectsCtrl"
        })
        .when("/projects", {
            templateUrl : "projects.htm",
            controller : "projectsCtrl"
        })
        .when("/projects/:projectId", {
            templateUrl : "project.htm",
            controller : "projectCtrl"
        })
        .when("/team", {
            templateUrl : "team.htm"
        })
        .when("/contacts", {
            templateUrl : "contacts.htm"
        })
        .otherwise({
        redirectTo: '/'
    });

    // use the HTML5 History API
    $locationProvider.html5Mode(true);
});

app.controller('mainCtrl', function($scope, $http) {
    $http.get("/api/projects")
        .then(function(response) {
            $scope.projects = response.data;
        });
});

app.controller('projectsCtrl', function($scope, $http) {
    $http.get("/api/projects")
        .then(function(response) {
            $scope.projects = response.data;
        });
});

app.controller('projectCtrl', function($scope, $routeParams, $http) {
    $http.get("/api/projects/" + $routeParams.projectId)
        .then(function(response) {
            $scope.project = response.data[0];
        });
});

app.controller('translateCtrl', function($scope, $translate) {
    $scope.changeLanguage = function (key) {
        $translate.use(key);
    };
});