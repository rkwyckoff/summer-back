const User = require("../models").User;
 const bcrypt = require("bcryptjs");
 const jwt = require("jwt-simple");
const appSecrets = require("../config/secrets");

  module.exports = {
  register (req, res) {
    var salt = bcrypt.genSaltSync(10);
    var hashedPass = bcrypt.hashSync(req.body.password, salt);
    User.create({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      password: hashedPass,
      salt: salt,

    })
      .then(user => res.status(201).send(user))
      .catch(error => res.status(400).send(error));
  },

  login (req, res) {
    User.findOne({
      where: {
        email: req.body.email
      }
    })
      .then(user => {
        if (!user) {
          return res.status(401).send({ message: "No such email or wrong password." });
        }
        console.log("about to hash password ", user);
        var input = bcrypt.hashSync(req.body.password, user.salt);
        if (input === user.password) {
          var token = jwt.encode({ id: user.id }, appSecrets.jwtSecret);
          console.log("About to encode token", token);
          var json = {
            user: user,
            token: token
          };
        return res.status(200).send(json);

        } else {
          return res.status(401).send({ message: "No such email or wrong password." });
        }
      })
      .catch(error => res.status(400).send(error));
  },

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
