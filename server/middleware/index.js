// const jwt = require("jwt-simple");
const secrets = require("../config/secrets");
const User = require("../models").User;
const passport = require('passport');
const FacebookStrategy = require('passport-facebook').Strategy;

passport.use(new FacebookStrategy({
    clientID: "1053060318171888",
    clientSecret: secrets.facebookSecret,
    callbackURL: "http://localhost:8000/testing",
    profileFields: ['id', 'displayName', 'gender', 'birthday', 'link', 'email', 'photos']
  },
  function(accessToken, refreshToken, profile, done) {
    console.log(profile);

    // SELECT * FROM Users WHERE name = profile.displayName AND email = ...
    // If no result, INSERT INTO Users (name, email) VALUES (profile.displayName, profile.email)
    User.findOrCreate({
      where: {
        name: profile.displayName,
        email: profile.emails[0].value,
        facebookId: profile.id
      }
      // photoUrl:
      // profileUrl: profile.
    })
    .then(user => done(null, user))
    .catch(error => done(error))
  }));

    // User.findOne({
    //   'facebookId': profile.id
    // }, function(err, user) {
    //     if (err) {
    //         return done(err);
    //     }
    //     //No user was found... so create a new user with values from Facebook (all the profile. stuff)
    //     if (!user) {
    //         User.create({
    //             name: profile.displayName,
    //             email: profile.emails[0].value,
    //             username: profile.username,
    //             provider: 'facebook',
    //             //now in the future searching on User.findOne({'facebook.id': profile.id } will match because of this next line
    //             facebook: profile._json
    //         }, function (err, data) {
    //
    //         })
    //     } else {
    //         //found user. Return
    //         return done(err, user);
    //     }
    // });

module.exports = passport
