const Job = require("../models").Job

module.exports = {
create (req, res) {
  Job.create({
    title: req.body.title,
    employer: req.body.employer,
    description: req.body.description,
    location: req.body.location,
    contact: req.body.contactName,
    email: req.body.email
  })
    .then(job => res.status(201).send(job))
    .catch(error => res.status(400).send(error));
}
}
