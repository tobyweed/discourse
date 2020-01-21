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
			`CREATE TABLE arg (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name text,
            description text,
            benefit boolean
            )`,
			err => {
				if (err) {
					// Table already created
				} else {
					// Table just created, creating some rows
					var insert =
						'INSERT INTO arg (name, description, benefit) VALUES (?,?,?)';
					db.run(insert, ['arg1', 'lorem', true]);
					db.run(insert, ['arg2', 'lorem', true]);
				}
			}
		);
	}
});

module.exports = db;
