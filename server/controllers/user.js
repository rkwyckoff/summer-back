const User = require("../models").User;
// const bcrypt = require("bcryptjs");
// const jwt = require("jwt-simple");
const appSecrets = require("../config/secrets");

module.exports = {
}


// module.exports = {
//   register (req, res) {
//     var salt = bcrypt.genSaltSync(10);
//     var hashedPass = bcrypt.hashSync(req.body.password, salt);
//     User.create({
//       username: req.body.username,
//       email: req.body.email,
//       password: hashedPass,
//       salt: salt,
//
//     })
//       .then(user => res.status(201).send(user))
//       .catch(error => res.status(400).send(error));
//   },
// }
//
