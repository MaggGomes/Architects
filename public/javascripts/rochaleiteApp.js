var app = angular.module("rochaleiteApp", ["ngRoute","pascalprecht.translate","ngAnimate"]);

// Translation configuration
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
        'ENVIAR': 'enviar',

        'ENVIO_SUCESSO': 'Mensagem enviada com sucesso',
        'ENVIO_ERRO': 'O serviço encontra-se temporariamente indisponível. Por favor tente mais tarde',
        'NOME_VAZIO' : 'O nome tem de ser preenchido',
        'NOME_GRANDE' : 'O nome não pode exceder 50 caracteres',
        'EMAIL_VAZIO' : 'O e-mail tem de ser preenchido',
        'EMAIL_MAU' : 'O e-mail não tem um formato válido',
        'ASSUNTO_VAZIO' : 'O assunto tem de ser preenchido',
        'ASSUNTO_GRANDE' : 'O assunto não pode exceder 70 caracteres',
        'MENSAGEM_VAZIO' : 'A mensagem tem de ser preenchido'
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
        'ENVIAR': 'send',

        'ENVIO_SUCESSO': 'Message sent successfully',
        'ENVIO_ERRO': 'Service is currently unavailable. Please try again later',
        'NOME_VAZIO' : 'Name must be filled',
        'NOME_GRANDE' : 'Name must not exceed 50 characters',
        'EMAIL_VAZIO' : 'E-mail must be filled',
        'EMAIL_MAU' : 'E-mail is not in a valid format',
        'ASSUNTO_VAZIO' : 'Subject must be filled',
        'ASSUNTO_GRANDE' : 'Subject must not exceed 70 characters',
        'MENSAGEM_VAZIO' : 'Message must be filled'
    });
    $translateProvider.preferredLanguage('pt');
});

app.controller('translateCtrl', function($scope, $translate) {
    $scope.changeLanguage = function (key) {
        $translate.use(key);
    };
});

// Routes configuration
app.config(function($routeProvider,$locationProvider) {
    $routeProvider
        .when("/", {
            templateUrl : "views/partials/projects.htm",
            controller : "projectsCtrl"
        })
        .when("/projects", {
            templateUrl : "views/partials/projects.htm",
            controller : "projectsCtrl"
        })
        .when("/projects/:projectId", {
            templateUrl : "views/partials/project.htm",
            controller : "projectCtrl"
        })
        .when("/team", {
            templateUrl : "views/partials/team.htm"
        })
        .when("/contacts", {
            templateUrl : "views/partials/contacts.htm",
            controller : "contactsCtrl"
        })
        .otherwise({
            redirectTo: '/' // TODO possivelmente mudar par /projects se a frontpage ficar numa view separas
        });

    // use the HTML5 History API (to remove hashbang[#!] from url)
    $locationProvider.html5Mode(true);
});

// Views controllers
app.controller('mainCtrl', function($scope, $http) { //TODO apagar (copia de projects) a menos que frontpage seja view a parte
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

app.controller('contactsCtrl', function($scope, $http, $translate) {
    // object to hold form information
    $scope.formData = {};

    // function to process the form
    $scope.contactForm = function() {
        // variables reseting to future submits
        $scope.success_message = '';
        $scope.error_message = '';
        $scope.errors = {};
        $http.post("/api/contact", $scope.formData)
            .then(function(response) {
                // clean form inputs
                $scope.formData = {};
                $scope.success_message = 'ENVIO_SUCESSO';
            })
            .catch(function(response) {
                console.log(response);
                angular.forEach(response.data.errors, function(error, i) {
                    switch (error.param) {
                        case 'name':
                            $scope.errors.name = error.msg;
                            break;
                        case 'email':
                            $scope.errors.email = error.msg;
                            break;
                        case 'subject':
                            $scope.errors.subject = error.msg;
                            break;
                        case 'message':
                            $scope.errors.message = error.msg;
                            break;
                        default:
                    }
                });
                if(response.data.errorMailSend == true){
                    $scope.error_message = 'ENVIO_ERRO';
                }
            });
    };

});
// Views controllers (end)