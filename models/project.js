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
        description: "description teste",
        address: "address teste"
    }])
};