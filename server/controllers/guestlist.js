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
       user_id: req.params.id
     },
     include: [{
      // where: { activity_id: }
       model: Activity,
       attributes: [
         'id',
         'title',
         'photoUrl',
         'date'
       ]
     }]

  })
   .then(guestlist => res.status(200).send(guestlist))
   .catch(error => res.status(400).send(error));
 },

 rsvpsByEvent (req, res) {
    Guestlist.findAll({
      where: {
        activity_id: req.params.id
        // attending: true
      },

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

   totalRsvps (req, res) {
      Guestlist.findAll({

     })
      .then(guestlist => res.status(200).send(guestlist))
      .catch(error => res.status(400).send(error));
    },
 
}
