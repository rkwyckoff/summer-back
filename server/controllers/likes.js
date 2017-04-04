const Comment = require("../models").Comment;
const Activity = require("../models").Activity;
const User = require("../models").User;
const Likes = require("../models").Likes;


module.exports = {
  create (req, res) {
    Likes.findOrCreate({
      where: {
        user_id: req.user.id,
        activity_id: req.user.id,
        //comment_id: req.comment.id

      }

    })
    .then(likes => res.status(201).send(likes))
    .catch(error => res.status(400).send(error))
    }
}
