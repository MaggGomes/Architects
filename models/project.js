var db = require('../db.js');

exports.create = function(title, description, address, done) {
  var values = [title, description, address]
  
  db.get().query('INSERT INTO projects (title, description, address) VALUES(?, ?, ?)', values, function(err, result) {
    if (err) return done(err);
    done(null, result.insertId)
  })
};

exports.getAll = function(done) {
  db.get().query('SELECT * FROM projects', function (err, rows) {
    if (err) return done(err);
    done(null, rows)
  })
};