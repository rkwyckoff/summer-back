const Educational = require("../models").Educational

module.exports = {
create (req, res) {
console.log(req.body);
  Educational.create({
    date: req.body.date,
    title: req.body.title,
    description: req.body.description,
    location: req.body.location,
    contact: req.body.contact,
    photoUrl: req.body.photoUrl,
    activityUrl: req.body.activityUrl,
    admissionFee: req.body.admissionFee

  })
    .then(educationals => res.status(201).send(educationals))
    .catch(error => res.status(400).send(error));
},
listEducationals (req, res) {
      Educational.findAll({
    })
      .then(educationals => res.status(200).send(educationals))
      .catch(error => res.status(400).send(error));
  }
}
