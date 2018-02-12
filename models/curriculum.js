var db = require('../config/config.js');

exports.create = function(description, address, year, state, language, order_number, done) {
	var values = [description, address, year, state, language, order_number];

	db.get().query('INSERT INTO curriculum (description, address, year, state, language, order_number) VALUES(?, ?, ?, ?, ?, ?)', values, function(err, result) {
		if (err) return done(err);
		done(null, result.insertId)
	})
};

exports.getAll = function(language, done) {
	db.get().query('SELECT * FROM curriculum ' +
		'WHERE curriculum.language = ? ' +
		'ORDER BY order_number', [language], function (err, curriculum) {
		if (err) return done(err);
		done(null, curriculum)
	})
};