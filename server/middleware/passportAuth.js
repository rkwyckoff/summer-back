// const jwt = require("jwt-simple");
const secrets = require("../config/secrets");
const User = require("../models").User;
const passport = require('passport');
const FacebookStrategy = require('passport-facebook').Strategy;

passport.use(new FacebookStrategy({
    clientID: "1053060318171888",
    clientSecret: secrets.facebookSecret,
    callbackURL: "http://localhost:8000/auth/facebook/callback",
    profileFields: ['id', 'displayName', 'gender', 'birthday', 'link', 'email', 'photos']
},
function(accessToken, refreshToken, profile, done) {
  console.log("token-access", accessToken);

    User.findOrCreate({
      where: {
      name: profile.displayName,
      email: profile.emails[0].value,
      facebookId: profile.id
      }

    })
    .then(user => done(null, user))
    .catch(error => done(error))
  }

));



module.exports = passport
