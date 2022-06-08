var soap = require('soap');
var bcrypt = require('bcrypt-nodejs');

var registerService = {
    RegisterServiceService: {
        RegisterService: {
            registerUser: function(args) {
                console.log(bcrypt.hashSync(args.password));
                client.query("INSERT INTO users(name, lastname, email, password) values($1, $2, $3, $4)",
                    [args.name, args.lastname, args.email, bcrypt.hashSync(args.password)]
                );
            }
        }
    }
}

module.exports = registerService;