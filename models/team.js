var db = require('../config/config.js');

exports.create = function(name, order_number, done) {
	var values = [name, order_number];

	db.get().query('INSERT INTO team (name, order_number) VALUES(?, ?)', values, function(err, result) {
		if (err) return done(err);
		done(null, result.insertId)
	})
};

exports.getAll = function(language, done) {
	db.get().query('SELECT * FROM team ORDER BY order_number', function (err, distinctions) {
		if (err) return done(err);
		done(null, distinctions)
	})
};