const middleware = require("../middleware/index");
const UserController = require("../controllers/user");
//const PhotoController = require("../controllers/photo");
//const CommentController = require("../controllers/comment");

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

  app.get('/testing', middleware.authenticate('facebook', authOptions),
    (req, res) => {
      console.log("inside testing route");
      console.log(req.user);
      res.status(200).send("it worked");
    })

//Facebook redirects back to the application
  app.get('/auth/facebook/callback',
  middleware.authenticate('facebook', { successRedirect: 'http://localhost:8000/auth/facebook/callback',
                                      failureRedirect: '/login' }));

//  app.post('/users', UserController.register);


};
