var express = require('express');
var router = express.Router();
var soap = require('soap');
var url = 'http://localhost:8000/RegisterService?wsdl';


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('register', {});
});

router.post('/', function(req, res, next) {
	var args = {name: req.body.givenName, surname:  req.body.surname, email: req.body.email, password: req.body.password};
	soap.createClient(url, function(err, client) {
		console.log(err);
		client.registerUser(args, function(err, result) {
			console.log(result);
		});
	});
	res.render('registerSuccesfull', {});
});


module.exports = router;
