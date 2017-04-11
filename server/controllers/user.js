const User = require("../models").User;
const Activity =require("../models").Activity;
 const bcrypt = require("bcryptjs");
 const jwt = require("jwt-simple");
const appSecrets = require("../config/secrets");
const Guestlist = require("../models").GuestList

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

        var input = bcrypt.hashSync(req.body.password, user.salt);
        if (input === user.password) {
          var token = jwt.encode({ id: user.id }, appSecrets.jwtSecret);

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

  facebookLogin (req, res) {
    var token = jwt.encode({ id: req.user.id }, appSecrets.jwtSecret);
    res.redirect(`https://tiy-mariefilbey-summerbreakfront.surge.sh/#!/fb/${token}`);
  },


  listUsers (req, res) {
        User.findAll({
      })
        .then(users => res.status(200).send(users))
        .catch(error => res.status(400).send(error));
    },

    findUser (req, res) {
    User.findById(req.params.id,{
      where: {user_id: req.params.id},
      include: {model: Activity}
      })
    .then(users => res.status(201).send(users))
    .catch(error => res.status(400).send(error));
  },
   addAdmin (req, res) {
    //  if (!req.user.isAdmin) {
    //    return res.status(403).send({message: "No can do"});
    //  }
     User.update(req.body, {
       fields: ['isAdmin'],
       where: {
         id: req.params.id
       }
     })
     .then(users => res.status(201).send(users))
     .catch(error => res.status(400).send(error));
   },

   deleteUser (req, res) {
      User.destroy({
         where: {
          id:req.params.id
          }
       })
      .then(user => res.status(200).send(user))
      .catch(error => res.status(400).send(error));
    },

    getProfile (req, res) {
      res.status(200).send(req.user)
    }


  //   rsvpsByUser (req, res) {
  //   User.findById(req.params.id, {
  //     include: [
  //       {model: Activity, attributes: ['title']},
  //       {model: Guestlist, where: {attending: true}
  //      }
  //     ]
  //   })
  //   .then(photo => res.status(201).send(photo))
  //   .catch(error => res.status(400).send(error));
  // },
  //


}
