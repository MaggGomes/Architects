var db = require('../config/config.js');

exports.create = function(project_id, description, link, language, order_number, done) {
	var values = [project_id, description, link, language, order_number];

	db.get().query('INSERT INTO links (project_id, description, link, language, order_number) VALUES(?, ?, ?, ?, ?)', values, function(err, result) {
		if (err) return done(err);
		done(null, result.insertId)
	})
};

exports.getAll = function(language, done) {
	db.get().query('SELECT links.*, projects_details.title FROM links ' +
		'LEFT JOIN projects_details ON links.project_id = projects_details.project_id ' +
		'WHERE links.language = ? AND (projects_details.language = ? OR projects_details.title IS NULL) ' +
		'ORDER BY order_number', [language, language], function (err, distinctions) {
		if (err) return done(err);
		done(null, distinctions)
	})
};