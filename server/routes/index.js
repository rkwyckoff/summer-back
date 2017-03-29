const middleware = require("../middleware/index");
const UserController = require("../controllers/user");
const ActivityController = require("../controllers/activity");
const JobController = require("../controllers/job");
const passport = require('passport');
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
      console.log("inside testing route");
      console.log(req.user);
      res.status(200).send("it worked");
    })

//Facebook redirects back to the application
  app.get('/auth/facebook/callback',
  middleware.authenticate('facebook', { successRedirect: 'http://localhost:8000/auth/facebook/callback',
                                      failureRedirect: '/login' }));

  app.post('/users', UserController.register);
                                    //Login user
  app.post('/login', UserController.login);
//  app.post('/users', UserController.register);
 app.post('/activities', ActivityController.create);

 app.post('/jobs', JobController.create);

 app.get('/users', UserController.listUsers);

 app.get('/activities', ActivityController.listActivities);

 app.get('/jobs', JobController.listJobs);


};
