const Camp = require("../models").Camp

module.exports = {
create (req, res) {
console.log(req.body);
  Camp.create({
    date: req.body.date,
    title: req.body.title,
    description: req.body.description,
    location: req.body.location,
    contact: req.body.contact,
    photoUrl: req.body.photoUrl,
    activityUrl: req.body.activityUrl,
    admissionFee: req.body.admissionFee

  })
    .then(camps => res.status(201).send(camps))
    .catch(error => res.status(400).send(error));
},
listCamps (req, res) {
      Camp.findAll({
    })
      .then(camps => res.status(200).send(camps))
      .catch(error => res.status(400).send(error));
  }
}
