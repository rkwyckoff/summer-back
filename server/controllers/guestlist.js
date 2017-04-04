const Activity = require("../models").Activity
const User = require("../models").User
const Comment = require("../models").Comment
const Guestlist = require("../models").Guestlist


module.exports = {
create (req, res) {
Guestlist.findOrCreate({
  where: {
  user_id: req.user.id,
  activity_id: req.params.id
},
  defaults: {
    attending: true
  }

})
  .then(guestlist => res.status(201).send(guestlist))
  .catch(error => res.status(400).send(error))
},

rsvpsByUser (req, res) {
   Guestlist.findAll({
      where: {
         user_id:req.params.id,
      }
  })
   .then(guestlist => res.status(200).send(guestlist))
   .catch(error => res.status(400).send(error));
 },

 deleteRsvp (req, res) {
     Guestlist.destroy({
        where: {
         id:req.params.id
         }
      })
     .then(guestlist => res.status(200).send(guestlist))
     .catch(error => res.status(400).send(error));
   },

  //  rsvpsPerUser (req, res) {
  //   User.findById(req.params.id, {
  //     include: [
  //       {model: Activity, attributes: ['firstName', lastName, ]},
  //       {model: Guestlist, include: {
  //         model: User, attributes: ['username']
  //      }}
  //     ]
  //   })
  //   .then(photo => res.status(201).send(photo))
  //   .catch(error => res.status(400).send(error));
  // },

}
