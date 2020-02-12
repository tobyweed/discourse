var express = require('express');
var router = express.Router();
var db = require('../database');

/* GET home page. */
router.get('/', function(req, res, next) {
	res.send({ express: '2' });
	// res.render('index', { title: 'Express' });
});

router.get('/consequences', (req, res, next) => {
	var sql = 'select * from consequences';
	var params = [];
	db.all(sql, params, (err, rows) => {
		if (err) {
			res.status(400).json({ error: err.message });
			return;
		}
		res.json({
			message: 'success',
			data: rows
		});
	});
});

router.get('/consequence/:id', (req, res, next) => {
	var sql = 'select * from consequences where consequence_id = ?';
	var params = [req.params.id];
	db.get(sql, params, (err, row) => {
		if (err) {
			res.status(400).json({ error: err.message });
			return;
		}
		res.json({
			message: 'success',
			data: row
		});
	});
});

module.exports = router;
