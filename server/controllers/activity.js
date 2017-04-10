const Activity = require("../models").Activity
const User = require("../models").User
const Comment = require("../models").Comment
const Guestlist = require("../models").Guestlist


module.exports = {
create (req, res) {
console.log(req.body);
  Activity.create({
    category: req.body.category,
    date: req.body.date,
    title: req.body.title,
    description: req.body.description,
    location: req.body.location,
    contact: req.body.contact,
    photoUrl: req.body.photoUrl,
    activityUrl: req.body.activityUrl,
    admissionFee: req.body.admissionFee,
    user_id: req.user.id,
    employer: req.body.employer,
    email: req.body.email

  })
    .then(activities => res.status(201).send(activities))
    .catch(error => res.status(400).send(error));
},
listActivities (req, res) {
      Activity.findAll({
    })
      .then(activities => res.status(200).send(activities))
      .catch(error => res.status(400).send(error));
  },
  clickActivity (req, res) {
  Activity.findById(req.params.id, {
    include: [
      {model: User, attributes: ['firstName']},
      {model: Comment, include: {
        model: User, attributes: ['firstName']
     }}
    ]
  })
  .then(activity => res.status(201).send(activity))
  .catch(error => console.log(error));
},

  deleteActivity (req, res) {
     Activity.destroy({
        where: {
         id:req.params.id
         }
      })
     .then(activity => res.sendStatus(200).send(activity))
     .catch(error => res.status(400).send(error));

   },

  editActivity (req, res) {
   Activity.update(req.body, {
     fields:
          ['category',
            'date',
            'title',
            'description',
            'location',
            'contact',
            'photoUrl',
            'activityUrl',
            'admissionFee',
            'isActivity',
            'email',
            'employer'
          ],
     where: {
       id: req.params.id
     }
   })
   .then(activity => res.status(201).send(activity))
   .catch(error => res.status(400).send(error));
 },

   approveEvent (req, res) {
   //  if (!req.user.isAdmin) {
   //    return res.status(403).send({message: "No can do"});
   //  }
    Activity.update(req.body, {
      fields: ['isActivity'],
      where: {
        id: req.params.id
      }
    })
    .then(activity => res.status(201).send(activity))
    .catch(error => res.status(400).send(error));
  },

  listEventsPending (req, res) {
        Activity.findAll({
          where: {
            isActivity: false
          }
       })
       .then(activity => res.status(201).send(activity))
       .catch(error => res.status(400).send(error));

   },

   listEventsLive (req, res) {
         Activity.findAll({
           where: {
             isActivity: true
           }
        })
        .then(activity => res.status(201).send(activity))
        .catch(error => res.status(400).send(error));

    },

   listFeatureEvents (req, res) {
      Activity.findAll({
        order: 'likesnumber DESC',
        limit: 5
     })
     .then(activity => res.status(201).send(activity))
     .catch(error => res.status(400).send(error));
   }
}
