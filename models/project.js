var db = require('../config/config.js');

exports.create = function(title, description, address, done) {
	var values = [title, description, address]

	db.get().query('INSERT INTO projects (title, description, address) VALUES(?, ?, ?)', values, function(err, result) {
		if (err) return done(err);
		done(null, result.insertId)
	})
};

var projects = [
	{id:"casa-murtinheira", thumbnail:"/images/projects/casa-murtinheira/1.jpg", title: "Casa Murtinheira", description: "description teste", address: "address teste", categories: ["rehabilitation", "equipments_services"], order: 30},
	{id:"palacete-av-boavista", thumbnail:"/images/projects/palacete-av-boavista/1.jpg", title: "Palacete Av. Boavista", description: "description teste", address: "address teste", categories: [], order: 29},
	{id:"edificio-sede-espaco-agros", thumbnail:"/images/projects/edificio-sede-espaco-agros/1.jpg", title: "Edifício Sede, Espaço Agros", description: "description teste", address: "address teste", categories: ["rehabilitation", "equipments_services"], order: 28},
	{id:"entrada-eventos-espaco-agros", thumbnail:"/images/projects/entrada-eventos-espaco-agros/1.jpg", title: "Entrada Eventos, Espaço Agros", description: "description teste", address: "address teste", categories: ["rehabilitation"], order: 27},
	{id:"casa-cadoucos", thumbnail:"/images/projects/casa-cadoucos/1.jpg", title: "Casa Cadouços", description: "description teste", address: "address teste", categories: [], order: 26},
	{id:"empatias", thumbnail:"/images/projects/empatias/1.jpg", title: "Empatias", description: "description teste", address: "address teste", categories: [], order: 25},
	{id:"jazigo-afife", thumbnail:"/images/projects/jazigo-afife/1.jpg", title: "Jazigo Afife", description: "description teste", address: "address teste", categories: [], order: 24},
	{id:"casa-dos-loios", thumbnail:"/images/projects/casa-dos-loios/1.jpg", title: "Casa dos Lóios", description: "description teste", address: "address teste", categories: [], order: 23},
	{id:"casa-jovim", thumbnail:"/images/projects/casa-jovim/1.jpg", title: "Casa Jovim", description: "description teste", address: "address teste", categories: [], order: 22},
	{id:"casa-da-baixa", thumbnail:"/images/projects/casa-da-baixa/1.jpg", title: "Casa da Baixa", description: "description teste", address: "address teste", categories: [], order: 21},
	{id:"pizza-&-drinks", thumbnail:"/images/projects/pizza-&-drinks/1.jpg", title: "Pizza & Drinks", description: "description teste", address: "address teste", categories: [], order: 20},
	{id:"casa-fvd", thumbnail:"/images/projects/casa-fvd/1.jpg", title: "Casa FVD", description: "description teste", address: "address teste", categories: [], order: 19},
	{id:"ed-s-lazaro", thumbnail:"/images/projects/ed-s-lazaro/1.jpg", title: "Ed. S. Lázaro", description: "description teste", address: "address teste", categories: [], order: 18},
	{id:"pizzaria-presto-cedofeita", thumbnail:"/images/projects/pizzaria-presto-cedofeita/1.jpg", title: "Pizzaria Presto Cedofeita", description: "description teste", address: "address teste", categories: [], order: 17},
	{id:"casa-rua-das-flores", thumbnail:"/images/projects/casa-rua-das-flores/1.jpg", title: "Casa Rua das Flores", description: "description teste", address: "address teste", categories: [], order: 16},
	{id:"ed-cedofeita-i", thumbnail:"/images/projects/ed-cedofeita-i/1.jpg", title: "Ed. Cedofeita I", description: "description teste", address: "address teste", categories: [], order: 15},
	{id:"casa-no-douro", thumbnail:"/images/projects/casa-no-douro/1.jpg", title: "Casa no Douro", description: "description teste", address: "address teste", categories: [], order: 14},
	{id:"restaurante-pateo-de-tanger", thumbnail:"/images/projects/restaurante-pateo-de-tanger/1.jpg", title: "Restaurante Páteo de Tânger", description: "description teste", address: "address teste", categories: [], order: 13},
	{id:"casa-guerra-junqueiro", thumbnail:"/images/projects/casa-guerra-junqueiro/1.jpg", title: "Casa Guerra Junqueiro", description: "description teste", address: "address teste", categories: [], order: 12},
	{id:"casa-nelas", thumbnail:"/images/projects/casa-nelas/1.jpg", title: "Casa nelas", description: "description teste", address: "address teste", categories: [], order: 11},
	{id:"ed-cedofeita-ii", thumbnail:"/images/projects/ed-cedofeita-ii/1.jpg", title: "Ed. Cedofeita II", description: "description teste", address: "address teste", categories: [], order: 10},
	{id:"ed-belomonte", thumbnail:"/images/projects/ed-belomonte/1.jpg", title: "Ed. Belomonte", description: "description teste", address: "address teste", categories: [], order: 9},
	{id:"casa-caldeireiros", thumbnail:"/images/projects/casa-caldeireiros/1.jpg", title: "Casa Caldeireiros", description: "description teste", address: "address teste", categories: [], order: 8},
	{id:"casa-esposende", thumbnail:"/images/projects/casa-esposende/1.jpg", title: "Casa Esposende", description: "description teste", address: "address teste", categories: [], order: 7},
	{id:"casa-b-vilarinha", thumbnail:"/images/projects/casa-b-vilarinha/1.jpg", title: "Casa B. Vilarinha", description: "description teste", address: "address teste", categories: [], order: 6},
	{id:"ed-clerigos", thumbnail:"/images/projects/ed-clerigos/1.jpg", title: "Ed. Clérigos", description: "description teste", address: "address teste", categories: [], order: 5},
	{id:"casa-povoa", thumbnail:"/images/projects/casa-povoa/1.jpg", title: "Casa Póvoa", description: "description teste", address: "address teste", categories: [], order: 4},
	{id:"restaurante-bocca", thumbnail:"/images/projects/restaurante-bocca/1.jpg", title: "Restaurante Bocca", description: "description teste", address: "address teste", categories: [], order: 3},
	{id:"casa-gondarem", thumbnail:"/images/projects/casa-gondarem/1.jpg", title: "Casa Gondarém", description: "description teste", address: "address teste", categories: [], order: 2},
	{id:"restaurante-cacau-wine-terrace", thumbnail:"/images/projects/restaurante-cacau-wine-terrace/1.jpg", title: "Restaurante Ccau Wine Terrace", description: "description teste", address: "address teste", categories: [], order: 1}
];

exports.getAll = function(done) {
	db.get().query('SELECT * FROM projects ORDER BY order_number', function (err, projects) {
		if (err) return done(err);
		done(null, projects)
	});
	/*projects.sort(function(a, b) {
		return a.order - b.order;
	});
    done(null, projects)*/
};

exports.getById = function(id, language, done) {
	db.get().query(
	'SELECT * FROM projects' +
	 'INNER JOIN projects_details ON projects.project_id = projects_details.project_id' +
	 'WHERE id = ? AND language = ?'
	 , [id, language], function (err, project) {
		if (err) return done(err);
		done(null, project)
	});
	/*projects.forEach(function(project){
		if (id == project.id){
			console.log(project);
			done(null, project);
		}
	});*/

	/*for(var i = 0; i < projects.size(); i++){
		if (id == projects[i].id){
			done(null, projects[i]);
		}
	}*/
	/*done(null, [{
		id:1,
		title: "teste1",
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vitae volutpat est. Etiam lobortis ultricies elit sit amet ornare. Etiam imperdiet placerat ipsum, ut porta nulla congue id. Donec ut arcu iaculis, tristique dui sit amet, ornare lorem. Fusce non libero eu tellus elementum viverra eu sed felis. Praesent tellus metus, molestie at gravida sed, blandit eget leo. In sed ornare magna. Phasellus volutpat ornare pharetra. Nunc eu eros quis turpis dapibus accumsan. Vivamus fringilla, arcu id viverra pharetra, lacus erat ornare nisi, vel pretium nunc felis vitae odio. Integer semper eget augue nec ultricies. Duis efficitur, ipsum id interdum auctor, ex nunc auctor ante, et sollicitudin enim urna ut nisi. Proin ultricies tristique justo nec elementum.\n" +
		"\n" +
		"Vivamus pulvinar eleifend nibh. Mauris justo massa, porta nec accumsan dictum, ornare quis nibh. Praesent consectetur elit ante, id tincidunt sem rhoncus at. Mauris nec nulla diam. Nullam sagittis, mauris non mattis porttitor, orci ante bibendum ligula, interdum interdum urna magna ac metus. Phasellus ligula ipsum, tempus ut dui ultricies, luctus tristique erat. Duis faucibus et libero nec maximus. Suspendisse nulla eros, condimentum eget cursus non, porttitor in lacus. Phasellus commodo tincidunt enim id laoreet. Phasellus cursus placerat sapien, sed viverra dui ultricies sed. Donec non vehicula purus. Etiam suscipit, eros at porttitor laoreet, neque felis venenatis ante, malesuada viverra sem nulla in augue. Vivamus suscipit lorem vel dolor facilisis, dignissim posuere quam viverra. In hac habitasse platea dictumst. Sed imperdiet euismod ligula. Donec euismod gravida velit ut consectetur.\n" +
		"\n" +
		"Sed a auctor velit. Morbi iaculis blandit enim ut auctor. Nullam velit nulla, interdum vitae interdum eu, auctor a libero. Integer eros eros, aliquam sed lacinia non, malesuada a erat. Aenean finibus, arcu et egestas euismod, nunc tortor tincidunt ex, maximus tristique eros enim facilisis massa. Sed tincidunt elementum ornare. Fusce facilisis justo nulla, sit amet mollis leo consectetur et. Vivamus tristique leo mauris, a rutrum risus ullamcorper vel. Donec laoreet pulvinar pulvinar.",
		address: "address teste"
	}])*/
};