var app = angular.module("rochaleiteApp", ["ngRoute"]);

app.config(function($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl : "main.htm",
            controller : "mainCtrl"
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
        .when("/contact", {
            templateUrl : "contact.htm"
        });
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