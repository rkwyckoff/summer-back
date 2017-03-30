const Comment = require("../models").Comment;
const User = require("../models").User;
const Activity = require("../models").Activity;
const Job = require("../models").Job;
const Camp = require("../models").Camp;
const Educational = require("../models").Educational;
const Volunteer = require("../models").Volunteer;

module.exports = {
  create (req, res) {
    console.log(req.user)
    Comment.create({
      text: req.body.comment,
      user_id: req.user.id,
      camp_id: req.params.id,
      volunteer_id: req.params.id,
      activity_id: req.params.id,
      educational_id: req.params.id
      job_id: req.params.id


    })
      .then(comment => res.status(201).send(comment))
      .catch(error => res.status(400).send(error));
  },

  listComments (req, res) {
     Comment.findAll({
        where: {
         photo_id:req.params.id,
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


};
