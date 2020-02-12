var sqlite3 = require('sqlite3').verbose();

const DBSOURCE = 'db.sqlite';

let db = new sqlite3.Database(DBSOURCE, err => {
	if (err) {
		// Cannot open database
		console.error(err.message);
		throw err;
	} else {
		console.log('Connected to the SQLite database.');
		db.run(
			`CREATE TABLE consequences (
	            consequence_id INTEGER PRIMARY KEY AUTOINCREMENT,
	            name text,
	            benefit boolean
			);`,
			err => {
				if (err) {
					// Table already created
				} else {
					// Table just created, creating some rows
					var insert =
						'INSERT INTO consequences (name, benefit) VALUES (?,?)';
					db.run(insert, ['consequence1', true]);
					db.run(insert, ['consequence2', true]);
				}
			}
		);
	}
});

module.exports = db;
