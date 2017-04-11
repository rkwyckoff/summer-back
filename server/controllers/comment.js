const Comment = require("../models").Comment;
const Activity = require("../models").Activity;
const User = require("../models").User;

module.exports = {
  create (req, res) {
    console.log(req.user)
    Comment.create({
      description: req.body.description,
      user_id: req.user.id,
      activity_id: req.params.id


    })
      .then(comment => res.status(201).send(comment))
      .catch(error => res.status(400).send(error));
  },


  listComments (req, res) {
     Comment.findAll({
        where: {
         activity_id:req.params.id,
       },
         include: {
           model: User, attributes: ['name']

        }
      })
     .then(comment => res.status(200).send(comment))
     .catch(error => res.status(400).send(error));
   },

  listallComments (req, res) {
      Comment.findAll({

      })
      .then(comment => res.status(200).send(comment))
      .catch(error => res.status(400).send(error));
  },

  deleteComment (req, res) {
     Comment.destroy({
        where: {
         id:req.params.id
         }
      })
     .then(comment => res.status(200).send(comment))
     .catch(error => res.status(400).send(error));
   }

}
