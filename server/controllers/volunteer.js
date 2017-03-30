const Volunteer = require("../models").Volunteer

module.exports = {
create (req, res) {
console.log(req.body);
  Volunteer.create({
    date: req.body.date,
    title: req.body.title,
    description: req.body.description,
    location: req.body.location,
    contact: req.body.contact,
    photoUrl: req.body.photoUrl,
    activityUrl: req.body.activityUrl


  })
    .then(volunteers => res.status(201).send(volunteers))
    .catch(error => res.status(400).send(error));
},

listVolunteers (req, res) {
      Volunteer.findAll()
      .then(volunteers => res.status(200).send(volunteers))
      .catch(error => res.status(400).send(error));
  }
}
