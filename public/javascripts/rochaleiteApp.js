var app = angular.module("rochaleiteApp", ["ngRoute","pascalprecht.translate","ngAnimate","ngMap", "slickCarousel"]);

/* CUSTOM SERVICES START */
app.factory('arrayUtils', function() {
	return {
		chunk: function(arr, size){
			var newArr = [];

			console.log(arr.length); // TODO debug
			for(var i = 0; i < arr.length; i+=size){
				newArr.push(arr.slice(i, i+size));
			}
			return newArr;
		}
	};
});
/* CUSTOM SERVICES START */

app.filter("trustUrl", function($sce) {
	return function(Url) {
		return $sce.trustAsResourceUrl(Url);
	};
});

/* TRANSLATION CONFIGURATION START */
app.config(function ($translateProvider) {
	$translateProvider.translations('pt', {
		'PROJECTOS': 'projectos',
		'ATELIER': 'atelier',
		'ARQUITECTOS': 'arquitectos',
		'ROCHA_LEITE_ARQUITECTOS': 'rocha leite arquitectos',
		'EQUIPA': 'equipa',
		'CURRICULUM': 'curriculo',
		'DISTINCOES_URL': 'distincoes',
		'DISTINCOES': 'distinções',
		'LINKS': 'ligacoes',
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
		'urban_studies': 'estudos_urbanisticos',
		'reabilitacao': 'rehabilitation',
		'equipamentos_servicos': 'equipments_services',
		'unifamiliar': 'single_family',
		'colectivo': 'collective',
		'turismo': 'tourism',
		'interiores': 'interior',
		'restauracao_comercio': 'restoration_commerce',
		'estudos_urbanisticos': 'urban_studies'

		/*'NOME': 'nome',
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
		'MENSAGEM_VAZIO' : 'A mensagem tem de ser preenchido'*/
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
		'urban_studies': 'urban_studies'

		/*'NOME': 'name',
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
		'MENSAGEM_VAZIO' : 'Message must be filled'*/
	});

	$translateProvider.preferredLanguage('pt');
});
/* TRANSLATION CONFIGURATION END */

/* ROUTES CONFIGURATION START */
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
		.when("/curriculo", {
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
		.when("/ligacoes", {
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
/* ROUTES CONFIGURATION END */

/* CONTROLLERS START */
app.controller('translateCtrl', function($scope, $translate) {
	$scope.changeLanguage = function (key) {
		$translate.use(key);
	};
});

app.controller('headerCtrl', function($scope, $routeParams, $location) {
	$scope.path = $location.path();

	$scope.$on('$routeChangeSuccess', function($event, current, previous) {
		$scope.path = $location.path();
	});
});

// Views controllers
app.controller('indexCtrl', function($scope, $http, $location, $translate) { //TODO apagar (copia de projects) a menos que frontpage seja view a parte
	$scope.languageselected = $translate.use();

	$scope.go = function () {
		$location.path('/' + $translate.instant('PROJECTOS'));
	};
});

app.controller('projectsCtrl', function($scope, $routeParams, $http, $location, $timeout, $translate, arrayUtils) {
	if($location.url().substr(0,9) == '/projects'){
		$translate.use('en');
	}

	$scope.loading=true;
	$http.get("/api/projects" + "?language=" + $translate.use())
		.then(function(response) {
			$scope.projects = response.data;
			$scope.slicedProjects = arrayUtils.chunk($scope.projects, 6);

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
			$scope.selectedCategory = category;
			$scope.slicedProjects.forEach(function(rowProjects){
				rowProjects.forEach(function(project){
					if (project.categories.indexOf(category) > -1){
						project.hasSelectedCategory = true;
					} else {
						project.hasSelectedCategory = false;
					}
				})
			});
			console.log($scope.slicedProjects);
			$location.url('/' + $translate.instant('PROJECTOS') + '?' + $translate.instant('CATEGORIA') + '=' + $translate.instant(category));
		}
	};

	$scope.clearSelectedProjects = function() {
		$scope.selectedCategory = null;
		$scope.slicedProjects.forEach(function(rowProjects){
			rowProjects.forEach(function(project){
				project.hasSelectedCategory = false;
			})
		});
	};
});

app.controller('projectCtrl', function($scope, $routeParams, $http, $location, $timeout, $translate, arrayUtils) {
	if($location.url().substr(0,9) == '/projects'){
		$translate.use('en');
	}

	$http.get("/api/projects/" + $routeParams.projectId + "?language=" + $translate.use())
		.then(function(response) {
			$scope.slickConfigured = false;
			$scope.project = response.data[0];
			$scope.project.images = $scope.project.images.split(','); //splits images string into array
			console.log($scope.project); // TODO debug
			$scope.selectedImage = $scope.project.images[0];
			$timeout(function () {
				$scope.slickConfigured = true;
			}, 5);
		});

	$scope.selectProjects = function(category) {
		$location.url('/' + $translate.instant('PROJECTOS') + '?' + $translate.instant('CATEGORIA') + '=' + $translate.instant(category));
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
				$scope.selectedImage = $scope.project.images[currentSlide];
			}
		}
	};
});

app.controller('architectsCtrl', function($scope, $location, $translate) {
	if($location.url() == '/architects'){
		$translate.use('en');
	}

	$scope.loading=false;
});

app.controller('teamCtrl', function($scope, $http, $location, $translate, arrayUtils) {
	if($location.url() == '/team'){
		$translate.use('en');
	}
	$scope.loading=true;

	$http.get("/api/team" + "?language=" + $translate.use())
		.then(function(response) {
			$scope.members = response.data;
			$scope.slicedMembers = arrayUtils.chunk($scope.members, 6);

			console.log($scope.members); // TODO debug
			console.log($scope.slicedMembers); // TODO debug
			$scope.loading = false;
		});
});

app.controller('curriculumCtrl', function($scope, $http, $location, $translate) {
	if($location.url() == '/curriculum'){
		$translate.use('en');
	}
	$scope.loading=true;
	$http.get("/api/curriculum" + "?language=" + $translate.use())
		.then(function(response) {
			$scope.curriculums = response.data;
			console.log($scope.curriculums); // TODO debug
			$scope.loading = false;
		});
});

app.controller('distinctionsCtrl', function($scope, $http, $location, $translate, $timeout) {
	if($location.url() == '/distinctions'){
		$translate.use('en');
	}

	$scope.loading=true;
	$scope.distinctionsConfigured = false;
	$http.get("/api/distinctions" + "?language=" + $translate.use())
		.then(function(response) {
			$scope.distinctions = response.data;
			console.log($scope.distinctions); // TODO debug

			$timeout(function () {
				$scope.distinctionsConfigured = true;
			}, 5);
			$scope.loading = false;
		});

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
				$scope.selectedDistinction = $scope.distinctions[currentSlide];
				var video = $('.slick-active').find('video').get(0).play();
			}
		}
	};
});

app.controller('linksCtrl', function($scope, $http, $location, $translate) {
	if($location.url() == '/links'){
		$translate.use('en');
	}

	$scope.loading=true;
	$http.get("/api/links" + "?language=" + $translate.use())
		.then(function(response) {
			$scope.links = response.data;
			console.log($scope.links); // TODO debug
			$scope.loading = false;
		});
});

app.controller('contactsCtrl', function($scope, $http, $translate, NgMap, $location) {
	if($location.url() == '/contacts'){
		$translate.use('en');
	}
});

app.controller('highlightsCtrl', function($scope, $location, $translate) {
	if($location.url() == '/highlights'){
		$translate.use('en');
	}

	$scope.loading=true;
});

/* CONTROLLERS END */
// TODO - EXEMPLO - APAGAR
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
		scope: {
			scrollsize: '='
		},
		link: function(scope, element, attribute) {

			element.niceScroll({
				cursorcolor: '#7F0000',
				cursorwidth: '5px',
				cursorfixedheight: scope.scrollsize,
				cursorborder: 'none',
				cursorborderradius: '0px',
				horizrailenabled:false
			});
		}
	};
});

