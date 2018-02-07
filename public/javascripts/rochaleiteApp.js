var app = angular.module("rochaleiteApp", ["ngRoute","pascalprecht.translate","ngAnimate","ngMap", "slickCarousel"]);

// Translation configuration
app.config(function ($translateProvider) {
	$translateProvider.translations('pt', {
		'PROJECTOS': 'projectos',
		'ATELIER': 'atelier',
		'ARQUITECTOS': 'arquitectos',
		'ROCHA_LEITE_ARQUITECTOS': 'rocha leite arquitectos',
		'EQUIPA': 'equipa',
		'CURRICULUM': 'curriculum',
		'DISTINCOES_URL': 'distincoes',
		'DISTINCOES': 'distinções',
		'LINKS': 'links',
		'CONTACTOS': 'contactos',
		'DESTAQUE': 'destaque',

		'REABILITACAO': 'reabilitação',
		'EQUIPAMENTOS': 'equipamentos e serviços',
		'HABITACAO': 'habitação',
		'UNIFAMILIAR': 'unifamiliar',
		'COLECTIVO': 'colectivo',
		'TURISMO': 'turismo',
		'INTERIORES': 'interiores',
		'RESTAURACAO': 'restauração e comércio',
		'ESTUDOS_URBANISTICOS': 'estudos urbanísticos',

		'CATEGORIA': 'categoria',
		'rehabilitation': 'reabilitacao',
		'equipments_services': 'equipamentos_servicos',
		'single_family': 'unifamiliar',
		'collective': 'colectivo',
		'tourism': 'turismo',
		'interior': 'interiores',
		'restoration_commerce': 'restauracao_comercio',
		'urban_studies': 'etudos_urbanisticos',
		'reabilitacao': 'rehabilitation',
		'equipamentos_servicos': 'equipments_services',
		'unifamiliar': 'single_family',
		'colectivo': 'collective',
		'turismo': 'tourism',
		'interiores': 'interior',
		'restauracao_comercio': 'restoration_commerce',
		'etudos_urbanisticos': 'urban_studies',

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
		'ATELIER': 'atelier',
		'ARQUITECTOS': 'architects',
		'ROCHA_LEITE_ARQUITECTOS': 'rocha leite architects',
		'EQUIPA': 'team',
		'CURRICULUM': 'curriculum',
		'DISTINCOES_URL': 'distinctions',
		'DISTINCOES': 'distinctions',
		'LINKS': 'links',
		'CONTACTOS': 'contacts',
		'DESTAQUE': 'highlights',

		'REABILITACAO': 'rehabilitation',
		'EQUIPAMENTOS': 'equipments and services',
		'HABITACAO': 'housing',
		'UNIFAMILIAR': 'single-family',
		'COLECTIVO': 'collective',
		'TURISMO': 'tourism',
		'INTERIORES': 'interior',
		'RESTAURACAO': 'restoration and commerce',
		'ESTUDOS_URBANISTICOS': 'urban studies',

		'CATEGORIA': 'category',
		'rehabilitation': 'rehabilitation',
		'equipments_services': 'equipments_services',
		'single_family': 'single_family',
		'collective': 'collective',
		'tourism': 'tourism',
		'interior': 'interior',
		'restoration_commerce': 'restoration_commerce',
		'urban_studies': 'urban_studies',

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
			templateUrl : "views/partials/index.htm",
			controller : "indexCtrl"
		})
		.when("/projects", {
			templateUrl : "views/partials/projects.htm",
			reloadOnSearch: false,
			controller : "projectsCtrl"
		})
		.when("/projectos", {
			templateUrl : "views/partials/projects.htm",
			reloadOnSearch: false,
			controller : "projectsCtrl"
		})
		.when("/projects/:projectId", {
			templateUrl : "views/partials/project.htm",
			controller : "projectCtrl"
		})
		.when("/projectos/:projectId", {
			templateUrl : "views/partials/project.htm",
			controller : "projectCtrl"
		})
		.when("/architects", {
			templateUrl : "views/partials/architects.htm",
			controller : "architectsCtrl"
		})
		.when("/arquitectos", {
			templateUrl : "views/partials/architects.htm",
			controller : "architectsCtrl"
		})
		.when("/team", {
			templateUrl : "views/partials/team.htm",
			controller : "teamCtrl"
		})
		.when("/equipa", {
			templateUrl : "views/partials/team.htm",
			controller : "teamCtrl"
		})
		.when("/curriculum", {
			templateUrl : "views/partials/curriculum.htm",
			controller : "curriculumCtrl"
		})
		.when("/distinctions", {
			templateUrl : "views/partials/distinctions.htm",
			controller : "distinctionsCtrl"
		})
		.when("/distincoes", {
			templateUrl : "views/partials/distinctions.htm",
			controller : "distinctionsCtrl"
		})
		.when("/links", {
			templateUrl : "views/partials/links.htm",
			controller : "linksCtrl"
		})
		.when("/contacts", {
			templateUrl : "views/partials/contacts.htm",
			controller : "contactsCtrl"
		})
		.when("/contactos", {
			templateUrl : "views/partials/contacts.htm",
			controller : "contactsCtrl"
		})
		.when("/highlights", {
			templateUrl : "views/partials/highlights.htm",
			controller : "highlightsCtrl"
		})
			// Route para a página Destaque
		/*.when("/destaque", {
			templateUrl : "views/partials/highlights.htm",
			controller : "highlightsCtrl"
		})*/
		.otherwise({
			redirectTo: '/'
		});

	// use the HTML5 History API (to remove hashbang[#!] from url)
	$locationProvider.html5Mode(true);
});



app.controller('headerCtrl', function($scope, $routeParams, $location) {
	$scope.path = $location.path();
	$scope.$on('$routeChangeSuccess', function($event, current, previous) {
		$scope.path = $location.path();
	});
});

// Views controllers
app.controller('indexCtrl', function($scope, $http, $location, $translate) { //TODO apagar (copia de projects) a menos que frontpage seja view a parte

	$scope.go = function () {
		$location.path('/' + $translate.instant('PROJECTOS'));
	};
});

app.controller('projectsCtrl', function($scope, $routeParams, $http, $location, $timeout, $translate) {
	if($location.url().substr(0,9) == '/projects'){
		$translate.use('en');
	}

	$('.main-container').niceScroll({
		cursorcolor: '#7F0000',
		cursorwidth: '5px',
		cursorfixedheight: 115,
		cursorborder: 'none',
		cursorborderradius: '0px'
	});

	$scope.loading=true;
	$http.get("/api/projects")
		.then(function(response) {
			$scope.projects = response.data;
			$scope.slicedProjects = $scope.chunkArray($scope.projects, 6);

			console.log($scope.projects);
			console.log($scope.slicedProjects);

			if($routeParams.category){
				$scope.selectProjects($routeParams.category);
			} else if($routeParams.categoria){
				$scope.selectProjects($translate.instant($routeParams.categoria));
			} else {
				$scope.clearSelectedProjects();
			}

            $scope.loading = false;
		});

	// Used to detect when one category is selected and projects in header or logo is clicked
	$scope.$on('$locationChangeSuccess', function($event, current, previous) {
		if($location.url() == '/projects' || $location.url() == '/projectos'){
			$scope.clearSelectedProjects();
		}
	});

	$scope.selectProjects = function(category) {
		if($scope.selectedCategory == category){
			$location.url('/' + $translate.instant('PROJECTOS'));
		} else {
			$scope.selectedProjectsConfigured = false;
			$scope.selectedCategory = category;
			$scope.selectedProjects = $scope.projects.filter(function (project) {
				return project.categories.indexOf(category) > -1;
			});
			$scope.selectedProject = $scope.selectedProjects[0];
			$location.url('/' + $translate.instant('PROJECTOS') + '?' + $translate.instant('CATEGORIA') + '=' + $translate.instant(category));
			console.log($scope.selectedProjects);
			$timeout(function () {
				$scope.selectedProjectsConfigured = true;
			}, 5);
		}
	};

	$scope.chunkArray = function(arr, size){
		var newArr = [];

		console.log(arr.length);
		for(var i = 0; i < arr.length; i+=size){
			newArr.push(arr.slice(i, i+size));
		}

		return newArr;
	};

	$scope.clearSelectedProjects = function() {
		$scope.selectedCategory = null;
		$scope.selectedProject = null;
		$scope.selectedProjects = null;
		$scope.selectedProjectsConfigured = false;
	};

	$scope.slickConfig = {
		method: {},
		infinite: true,
		focusOnSelect:true,
		speed: 300,
		slidesToShow: 1,
		centerMode: true,
		variableWidth: true,
		event: {
			afterChange: function (event, slick, currentSlide, nextSlide) {
				$scope.selectedProject = $scope.selectedProjects[currentSlide];
			}
		}
	};

	$scope.checkIsActiveSlide = function() {
		return angular.element.parent().hasClass('img-wrapper');
	};
});

app.controller('projectCtrl', function($scope, $routeParams, $http, $location, $translate) {
	if($location.url().substr(0,9) == '/projects'){
		$translate.use('en');
	}

	$('.main-container').niceScroll({
		cursorcolor: '#7F0000',
		cursorwidth: '5px',
		cursorborder: 'none',
		cursorborderradius: '0px'
	});

	var navHeight = $('header').height() + $('footer').height();

	$(".main-container").css({'height':(navHeight+'px')});

	$http.get("/api/projects/" + $routeParams.projectId + "?language=" + $translate.use())
		.then(function(response) {
			$scope.project = response.data;
			$scope.selectedProject = response.data;
		});

	$scope.selectProjects = function(category) {
		$location.url('/' + $translate.instant('PROJECTOS') + '?' + $translate.instant('CATEGORIA') + '=' + $translate.instant(category));
	};
});

app.controller('architectsCtrl', function($scope, $location, $translate) {
	if($location.url() == '/architects'){
		$translate.use('en');
	}

	$('.main-container').niceScroll({
		cursorcolor: '#7F0000',
		cursorwidth: '5px',
		cursorfixedheight: 275,
		cursorborder: 'none',
		cursorborderradius: '0px'
	});

	$scope.loading=false;
});

app.controller('teamCtrl', function($scope, $location, $translate) {
	if($location.url() == '/team'){
		$translate.use('en');
	}
});

app.controller('curriculumCtrl', function($scope, $location, $translate) {

    $('.main-container').niceScroll({
        cursorcolor: '#7F0000',
        cursorwidth: '5px',
        cursorborder: 'none',
        cursorborderradius: '0px'
    });

});

app.controller('distinctionsCtrl', function($scope, $location, $translate) {
	if($location.url() == '/distinctions'){
		$translate.use('en');
	}
	$scope.loading=true;
});

app.controller('linksCtrl', function($scope, $location, $translate) {
	$scope.loading=false;

	$('.main-container').niceScroll({
		cursorcolor: '#7F0000',
		cursorwidth: '5px',
		cursorborder: 'none',
		cursorborderradius: '0px'
	});
});

app.controller('contactsCtrl', function($scope, $http, $translate, NgMap, $location) {
	if($location.url() == '/contacts'){
		$translate.use('en');
	}

	$('.main-container').niceScroll({
		cursorcolor: '#7F0000',
		cursorwidth: '5px',
		cursorborder: 'none',
		cursorborderradius: '0px'
	});
});

app.controller('highlightsCtrl', function($scope, $location, $translate) {
	if($location.url() == '/highlights'){
		$translate.use('en');
	}
	$scope.loading=true;
});

// Views controllers (end)

app.animation('.slide', [function() {
	return {
		// make note that other events (like addClass/removeClass)
		// have different function input parameters
		enter: function(element, doneFn) {
			jQuery(element).fadeIn(1000, doneFn);

			// remember to call doneFn so that angular
			// knows that the animation has concluded
		},

		move: function(element, doneFn) {
			jQuery(element).fadeIn(1000, doneFn);
		},

		leave: function(element, doneFn) {
			jQuery(element).fadeOut(1000, doneFn);
		}
	}
}]);

app.directive('niceScroll', function() {
	return{
		restrict: 'A',
		link: function(scope, element, attribute) {

			var nicescrolConf = {
				"cursorcolor": "#bdbdbd",
				"background": "#ffffff",
				"cursorwidth": "10px",
				"cursorborder": "none",
				"cursorborderradius": "2px",
				"zindex": 9999,
				"autohidemode": false
			};

			element.niceScroll(nicescrolConf);
		}
	};
});