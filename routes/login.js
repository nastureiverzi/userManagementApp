var express = require('express');
var router = express.Router();
var bcrypt = require('bcrypt-nodejs');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('login', { });
});

router.post('/', function(req, res, next) {
  var login = false;

  var query = client.query("SELECT name, password FROM Users WHERE email = '" + req.param('email') + "'");

  query.on("row", function (row, result) {

    login = bcrypt.compareSync(req.param('password'), row.password);

    if(login == true){
      res.render('loginSuccesfull', {});
    } else {
      res.render('loginFailed', {});
    }
  });

});

module.exports = router;
