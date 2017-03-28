const Activity = require("../models").Activity

module.exports = {
create (req, res) {
console.log(req.body);
  Activity.create({
    date: req.body.date,
    title: req.body.title,
    description: req.body.description,
    location: req.body.location,
    contact: req.body.contact,
    photoUrl: req.body.photoUrl,
    activityUrl: req.body.activityUrl,
    admissionFee: req.body.admissionFee

  })
    .then(activity => res.status(201).send(activity))
    .catch(error => res.status(400).send(error));
}
}