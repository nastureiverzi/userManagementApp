var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  	console.log("In listing records");
	var query = client.query("SELECT name, lastname FROM users ORDER BY lastname, name");
	query.on("row", function (row, result) {
		result.addRow(row);
	});
});


/*Get user by username*/
router.get('/:username', function(req, res, next) {
  	console.log('Get user with username :' + req.param('username'));
	var query = client.query("SELECT name, lastName FROM Users WHERE userName = " + req.param('userName') + "ORDER BY lastName, name");
	query.on("row", function (row, result) {
		result.addRow(row);
	});
});

/*Create user*/
 router.post('/create', function(req, res, next) {
	client.query("INSERT INTO users(name, lastname, email, username, password) values($1, $2, $3, $4, $5)",
	 ['Raluca', 'Botas', 'raluca.botas@gmail.com', 'botache', 'viataeminunata']);
});

/*Update user*/
router.put('/:id', function(req, res, next) {
	client.query("UPDATE Users set name = 'Kumar' WHERE lastname='Botas'");
});


router.delete('/:id', function(req, res, next) {
	client.query("DELETE FROM  Users WHERE lastname = " + req.param('id'));
});

module.exports = router;
