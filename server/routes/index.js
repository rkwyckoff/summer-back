const passport = require("../middleware/passportAuth");
const standard = require("../middleware/standardAuth");
const UserController = require("../controllers/user");
const ActivityController = require("../controllers/activity");
const CommentController = require("../controllers/comment");
const GuestlistController = require("../controllers/guestlist");
const LikesController = require("../controllers/likes");




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

  app.get('/auth/facebook', passport.authenticate('facebook', { session: false, scopes: ['photos'] }));
  // app.get('testing', passport.authenticate('facebook', authOptions),
  //   (req, res) => {
  //
  //     res.status(200).send('it worked');
  //   })

  app.get('/auth/facebook/callback',
    passport.authenticate('facebook', { session: false,
                                        failureRedirect: '/' }),
    UserController.facebookLogin);
//Facebook redirects back to the application
  // app.get('/auth/facebook/callback', passport.authenticate('facebook', { successRedirect: 'http://localhost8000/auth/facebook/callback',
  //                                     failureRedirect: '/login' }));
  //                                     console.log('it worked again')


  app.post('/users', UserController.register);
                                    //Login user
  app.post('/login', UserController.login);
//  app.post('/users', UserController.register);
 app.post('/activities', standard.authenticate, ActivityController.create);

 //app.post('/comments', standard.authenticate, CommentController.create);


 app.post('/activities/:id/comments', standard.authenticate, CommentController.create )
//List all comments for 1 photo
 app.get('/activities/:id', standard.authenticate, ActivityController.clickActivity);

 app.get('/users', UserController.listUsers);

 app.get('/users/:id', UserController.findUser);



 app.get('/comments', CommentController.listallComments);

 app.get('/activities/:id/comments', CommentController.listComments);

 app.get('/activities', ActivityController.listActivities);

 app.get('/activities/all/featured', ActivityController.listFeatureEvents);

 app.get('/activities/all/pending', ActivityController.listEventsFalse);


 app.get('/users/:id/events', standard.authenticate, GuestlistController.rsvpsByUser);

 app.get('/activities/:id/rsvp', standard.authenticate, GuestlistController.rsvpsByEvent);


 app.get('/activities/:id/likes', standard.authenticate, LikesController.listLikes);

 app.put('/users/:id', standard.authenticate, UserController.addAdmin);

 app.put('/activities/:id', standard.authenticate, ActivityController.editActivity);

// app.put('/activities/:id/approve', standard.authenticate, ActivityController.approveEvent);


 app.post('/activities/:id/delete', ActivityController.deleteActivity);

 app.post('/activities/:id/rsvp', standard.authenticate, GuestlistController.create);

 app.post('/activities/:id/likes', standard.authenticate, LikesController.create);

 app.delete('/guestlist/:id/', standard.authenticate, GuestlistController.deleteRsvp);

 app.delete('/users/:id/', standard.authenticate, UserController.deleteUser);













};
