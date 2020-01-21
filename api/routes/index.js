var express = require('express');
var router = express.Router();
var db = require('../database');

/* GET home page. */
router.get('/', function(req, res, next) {
	res.send({ express: '2' });
	// res.render('index', { title: 'Express' });
});

router.get('/args', (req, res, next) => {
	var sql = 'select * from arg';
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

module.exports = router;
