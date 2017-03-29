const passport = require("../middleware/passportAuth");
const standard = require("../middleware/standardAuth");
const UserController = require("../controllers/user");
const ActivityController = require("../controllers/activity");
const JobController = require("../controllers/job");

const authOptions = {
  scope: ['public_profile', 'email'],
  session: false
};

module.exports = (app) => {
  app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, access-token");
    next();
  });
//Redirect user to Facebook
  // app.get('/auth/facebook', middleware.authenticate('facebook'), UserController.signup);

  app.get('/testing', passport.authenticate('facebook', authOptions),
    (req, res) => {

      res.status(200).send("it worked");
    })

//Facebook redirects back to the application
  app.get('/auth/facebook/callback',
  passport.authenticate('facebook', { successRedirect: 'http://localhost:8000/auth/facebook/callback',
                                      failureRedirect: '/login' }));

  app.post('/users', UserController.register);
                                    //Login user
  app.post('/login', UserController.login);
//  app.post('/users', UserController.register);
 app.post('/activities', standard.authenticate, ActivityController.create);

 app.post('/jobs', standard.authenticate, JobController.create);

 app.get('/users', UserController.listUsers);

 app.get('/activities', ActivityController.listActivities);

 app.get('/jobs', JobController.listJobs);

 app.get('/users/:id', UserController.findUser);

  app.put('/users/:id', standard.authenticate, UserController.addAdmin);


};
