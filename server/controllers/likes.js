const Comment = require("../models").Comment;
const Activity = require("../models").Activity;
const User = require("../models").User;
const Likes = require("../models").Likes;


module.exports = {
  create (req, res) {

    Likes.findOrCreate({
      where: {
        user_id: req.user.id,
        activity_id: req.params.id
        //comment_id: req.comment.id

      }
    //  likesnumber: likesnumber++;
    })
 //      .then(function(activity) {
 //       console.log("inside it")
 //   return activity.increment('likesnumber', {by: 1})
 // }).then(likes => res.status(201).send(likes))

    .spread((like, created) => {
      console.log('here it is', like)
      if (created) {
        like.getActivity().then(activity => activity.increment('likesnumber'))
      }
      res.status(201).send(like)
    })
    .catch(error => console.log(error))
  },

  listLikes (req, res) {
     Likes.findAll({
        where: {
           activity_id:req.params.id
        }
    })
     .then(likes => res.status(200).send(likes))
     .catch(error => res.status(400).send(error));
  }


}
