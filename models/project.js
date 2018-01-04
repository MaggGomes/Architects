var db = require('../config/config.js');

exports.create = function(title, description, address, done) {
  var values = [title, description, address]
  
  db.get().query('INSERT INTO projects (title, description, address) VALUES(?, ?, ?)', values, function(err, result) {
    if (err) return done(err);
    done(null, result.insertId)
  })
};

var projects = [
        {id:"casa-murtinheira", thumbnail:"/thumbnails/casa-murtinheira.jpg", title: "Casa Murtinheira", description: "description teste", address: "address teste", categories: ["rehabilitation", "equipments_services"]},
        {id:"palacete-av-boavista", thumbnail:"/thumbnails/palacete-av-boavista.jpg", title: "Palacete Av. Boavista", description: "description teste", address: "address teste", categories: []},
        {id:"edificio-sede-espaco-agros", thumbnail:"/thumbnails/edificio-sede-espaco-agros.jpg", title: "Edifício Sede, Espaço Agros", description: "description teste", address: "address teste", categories: ["rehabilitation", "equipments_services"]},
        {id:"entrada-eventos-espaco-agros", thumbnail:"/thumbnails/entrada-eventos-espaco-agros.jpg", title: "Entrada Eventos, Espaço Agros", description: "description teste", address: "address teste", categories: ["rehabilitation"]},
        {id:"casa-cadoucos", thumbnail:"/thumbnails/casa-cadoucos.jpg", title: "Casa Cadouços", description: "description teste", address: "address teste", categories: []},
        {id:"empatias", thumbnail:"/thumbnails/empatias.jpg", title: "Empatias", description: "description teste", address: "address teste", categories: []},
        {id:"jazigo-afife", thumbnail:"/thumbnails/jazigo-afife.jpg", title: "Jazigo Afife", description: "description teste", address: "address teste", categories: []},
        {id:"casa-dos-loios", thumbnail:"/thumbnails/casa-dos-loios.jpg", title: "Casa dos Lóios", description: "description teste", address: "address teste", categories: []},
        {id:"casa-jovim", thumbnail:"/thumbnails/casa-jovim.jpg", title: "Casa Jovim", description: "description teste", address: "address teste", categories: []},
        {id:"casa-da-baixa", thumbnail:"/thumbnails/casa-da-baixa.jpg", title: "Casa da Baixa", description: "description teste", address: "address teste", categories: []},
        {id:"pizza-&-drinks", thumbnail:"/thumbnails/pizza-&-drinks.jpg", title: "Pizza & Drinks", description: "description teste", address: "address teste", categories: []},
        {id:"casa-fvd", thumbnail:"/thumbnails/casa-fvd.jpg", title: "Casa FVD", description: "description teste", address: "address teste", categories: []},
        {id:"ed-s-lazaro", thumbnail:"/thumbnails/ed-s-lazaro.jpg", title: "Ed. S. Lázaro", description: "description teste", address: "address teste", categories: []},
        {id:"pizzaria-presto-cedofeita", thumbnail:"/thumbnails/pizzaria-presto-cedofeita.jpg", title: "Pizzaria Presto Cedofeita", description: "description teste", address: "address teste", categories: []},
        {id:"casa-rua-das-flores", thumbnail:"/thumbnails/casa-rua-das-flores.jpg", title: "Casa Rua das Flores", description: "description teste", address: "address teste", categories: []},
        {id:"ed-cedofeita-i", thumbnail:"/thumbnails/ed-cedofeita-i.jpg", title: "Ed. Cedofeita I", description: "description teste", address: "address teste", categories: []},
        {id:"casa-no-douro", thumbnail:"/thumbnails/casa-no-douro.jpg", title: "Casa no Douro", description: "description teste", address: "address teste", categories: []},
        {id:"restaurante-pateo-de-tanger", thumbnail:"/thumbnails/restaurante-pateo-de-tanger.jpg", title: "Restaurante Páteo de Tânger", description: "description teste", address: "address teste", categories: []},
        {id:"casa-guerra-junqueiro", thumbnail:"/thumbnails/casa-guerra-junqueiro.jpg", title: "Casa Guerra Junqueiro", description: "description teste", address: "address teste", categories: []},
        {id:"casa-nelas", thumbnail:"/thumbnails/casa-nelas.jpg", title: "Casa nelas", description: "description teste", address: "address teste", categories: []},
        {id:"ed-cedofeita-ii", thumbnail:"/thumbnails/ed-cedofeita-ii.jpg", title: "Ed. Cedofeita II", description: "description teste", address: "address teste", categories: []},
        {id:"ed-belomonte", thumbnail:"/thumbnails/ed-belomonte.jpg", title: "Ed. Belomonte", description: "description teste", address: "address teste", categories: []},
        {id:"casa-caldeireiros", thumbnail:"/thumbnails/casa-caldeireiros.jpg", title: "Casa Caldeireiros", description: "description teste", address: "address teste", categories: []},
        {id:"casa-esposende", thumbnail:"/thumbnails/casa-esposende.jpg", title: "Casa Esposende", description: "description teste", address: "address teste", categories: []},
        {id:"casa-b-vilarinha", thumbnail:"/thumbnails/casa-b-vilarinha.jpg", title: "Casa B. Vilarinha", description: "description teste", address: "address teste", categories: []},
        {id:"ed-clerigos", thumbnail:"/thumbnails/ed-clerigos.jpg", title: "Ed. Clérigos", description: "description teste", address: "address teste", categories: []},
        {id:"casa-povoa", thumbnail:"/thumbnails/casa-povoa.jpg", title: "Casa Póvoa", description: "description teste", address: "address teste", categories: []},
        {id:"restaurante-bocca", thumbnail:"/thumbnails/restaurante-bocca.jpg", title: "Restaurante Bocca", description: "description teste", address: "address teste", categories: []},
        {id:"casa-gondarem", thumbnail:"/thumbnails/casa-gondarem.jpg", title: "Casa Gondarém", description: "description teste", address: "address teste", categories: []},
        {id:"restaurante-cacau-wine-terrace", thumbnail:"/thumbnails/restaurante-cacau-wine-terrace.jpg", title: "Restaurante Ccau Wine Terrace", description: "description teste", address: "address teste", categories: []}
        ];

exports.getAll = function(done) {
  /*db.get().query('SELECT * FROM projects', function (err, rows) {
    if (err) return done(err);
    done(null, rows)
  })*/
    done(null, projects)
};

exports.getById = function(id, done) {
    /*db.get().query('SELECT * FROM projects WHERE id = ?', [id], function (err, row) {
        if (err) return done(err);
        done(null, row)
    })*/
	projects.forEach(function(project){
    if (id == project.id){
		console.log(project);
			done(null, project);
		}
  });
	
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