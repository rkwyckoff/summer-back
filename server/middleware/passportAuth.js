// const jwt = require("jwt-simple");
const secrets = require("../config/secrets");
const User = require("../models").User;
const passport = require('passport');
const FacebookStrategy = require('passport-facebook').Strategy;

passport.use(new FacebookStrategy({
    clientID: "1053060318171888",
    clientSecret: secrets.facebookSecret,
    callbackURL: "http://rocky-crag-27614.herokuapp.com/",
    profileFields: ['id', 'displayName', 'gender', 'birthday', 'link', 'email', 'photos']
},
function(accessToken, refreshToken, profile, done) {
  console.log("token-access", accessToken);
  if (accessToken) {
  // SELECT * FROM Users WHERE name = profile.displayName AND email = ...
  // If no result, INSERT INTO Users (name, email) VALUES (profile.displayName, profile.email)
    User.findOrCreate({
      where: {
      name: profile.displayName,
      email: profile.emails[0].value,
      facebookId: profile.id
      //accessToken: res.accessToken
      }
    // photoUrl:
   // profileUrl: profile.
    })
    .then(user => done(null, user))
    .catch(error => done(error))
  }
  else {User.register}

//
}));



module.exports = passport
