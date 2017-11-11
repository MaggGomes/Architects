var db = require('../config/config.js');

exports.create = function(title, description, address, done) {
  var values = [title, description, address]
  
  db.get().query('INSERT INTO projects (title, description, address) VALUES(?, ?, ?)', values, function(err, result) {
    if (err) return done(err);
    done(null, result.insertId)
  })
};

exports.getAll = function(done) {
  /*db.get().query('SELECT * FROM projects', function (err, rows) {
    if (err) return done(err);
    done(null, rows)
  })*/
    done(null, [
        {id:1, title: "teste1", description: "description teste", address: "address teste"},
        {id:2, title: "teste1", description: "description teste", address: "address teste"},
        {id:3, title: "teste1", description: "description teste", address: "address teste"},
        {id:4, title: "teste1", description: "description teste", address: "address teste"},
        {id:5, title: "teste1", description: "description teste", address: "address teste"},
        {id:6, title: "teste1", description: "description teste", address: "address teste"},
        {id:7, title: "teste1", description: "description teste", address: "address teste"},
        {id:8, title: "teste1", description: "description teste", address: "address teste"},
        {id:9, title: "teste1", description: "description teste", address: "address teste"},
        {id:10, title: "teste1", description: "description teste", address: "address teste"},
        {id:11, title: "teste1", description: "description teste", address: "address teste"},
        {id:12, title: "teste1", description: "description teste", address: "address teste"},
        {id:13, title: "teste1", description: "description teste", address: "address teste"},
        {id:14, title: "teste1", description: "description teste", address: "address teste"},
        {id:15, title: "teste1", description: "description teste", address: "address teste"},
        {id:16, title: "teste1", description: "description teste", address: "address teste"},
        {id:17, title: "teste1", description: "description teste", address: "address teste"},
        {id:18, title: "teste1", description: "description teste", address: "address teste"},
        {id:19, title: "teste1", description: "description teste", address: "address teste"},
        {id:20, title: "teste1", description: "description teste", address: "address teste"},
        {id:21, title: "teste1", description: "description teste", address: "address teste"},
        {id:22, title: "teste1", description: "description teste", address: "address teste"},
        {id:23, title: "teste1", description: "description teste", address: "address teste"},
        {id:24, title: "teste1", description: "description teste", address: "address teste"},
        {id:25, title: "teste1", description: "description teste", address: "address teste"},
        {id:26, title: "teste1", description: "description teste", address: "address teste"},
        {id:27, title: "teste1", description: "description teste", address: "address teste"},
        {id:28, title: "teste1", description: "description teste", address: "address teste"},
        {id:29, title: "teste1", description: "description teste", address: "address teste"},
        {id:30, title: "teste1", description: "description teste", address: "address teste"}
        ])
};

exports.getById = function(id, done) {
    /*db.get().query('SELECT * FROM projects WHERE id = ?', [id], function (err, row) {
        if (err) return done(err);
        done(null, row)
    })*/
    done(null, [{
        id:1,
        title: "teste1",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vitae volutpat est. Etiam lobortis ultricies elit sit amet ornare. Etiam imperdiet placerat ipsum, ut porta nulla congue id. Donec ut arcu iaculis, tristique dui sit amet, ornare lorem. Fusce non libero eu tellus elementum viverra eu sed felis. Praesent tellus metus, molestie at gravida sed, blandit eget leo. In sed ornare magna. Phasellus volutpat ornare pharetra. Nunc eu eros quis turpis dapibus accumsan. Vivamus fringilla, arcu id viverra pharetra, lacus erat ornare nisi, vel pretium nunc felis vitae odio. Integer semper eget augue nec ultricies. Duis efficitur, ipsum id interdum auctor, ex nunc auctor ante, et sollicitudin enim urna ut nisi. Proin ultricies tristique justo nec elementum.\n" +
        "\n" +
        "Vivamus pulvinar eleifend nibh. Mauris justo massa, porta nec accumsan dictum, ornare quis nibh. Praesent consectetur elit ante, id tincidunt sem rhoncus at. Mauris nec nulla diam. Nullam sagittis, mauris non mattis porttitor, orci ante bibendum ligula, interdum interdum urna magna ac metus. Phasellus ligula ipsum, tempus ut dui ultricies, luctus tristique erat. Duis faucibus et libero nec maximus. Suspendisse nulla eros, condimentum eget cursus non, porttitor in lacus. Phasellus commodo tincidunt enim id laoreet. Phasellus cursus placerat sapien, sed viverra dui ultricies sed. Donec non vehicula purus. Etiam suscipit, eros at porttitor laoreet, neque felis venenatis ante, malesuada viverra sem nulla in augue. Vivamus suscipit lorem vel dolor facilisis, dignissim posuere quam viverra. In hac habitasse platea dictumst. Sed imperdiet euismod ligula. Donec euismod gravida velit ut consectetur.\n" +
        "\n" +
        "Sed a auctor velit. Morbi iaculis blandit enim ut auctor. Nullam velit nulla, interdum vitae interdum eu, auctor a libero. Integer eros eros, aliquam sed lacinia non, malesuada a erat. Aenean finibus, arcu et egestas euismod, nunc tortor tincidunt ex, maximus tristique eros enim facilisis massa. Sed tincidunt elementum ornare. Fusce facilisis justo nulla, sit amet mollis leo consectetur et. Vivamus tristique leo mauris, a rutrum risus ullamcorper vel. Donec laoreet pulvinar pulvinar.",
        address: "address teste"
    }])
};