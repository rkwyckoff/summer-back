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
    console.log("Got response from facebook");
    console.log(accessToken, refreshToken, profile);

    // User.findOrCreate(..., function(err, user) {
    //   if (err) { return done(err); }
    //   done(null, user);
    // });
  }
));

    //   console.log("Got response from facebook");
    //  console.log(accessToken, refreshToken, profile);
    // // //  done(null, false);



module.exports = passport;

// module.exports = {
//   authenticate (req, res, next) {
//     console.log("Request Token", req.headers['access-token']);
//     // Look for a token.
//     var token = req.headers['access-token'] || req.query.access_token;
//
//     // If they didn't provide a token, send them away.
//     if (!token) {
//       res.status(401).send({
//         message: "Must be authenticated to use this route."
//       });
//     }
//
//     // Try to decode the token.
//     try {
//       var decoded = jwt.decode(token, appSecrets.jwtSecret);
//       var userId = decoded.id;
//
//             // If decoding the token was successful,
//       // look up the user from the token Id.
//       User.findById(userId).then(user => {
//         // If no matching user was found, send them away.
//         if (!user) {
//           res.status(401).send({ message: "Error during authentication." });
//         }
//
//         // Otherwise, attach the user to the request object.
//         req.user = user;
//         //res.status(200).send({message: "Success", })
//         next();
//       });
//
//     } catch (e) {
//       console.log(e);
//       // Token was garbage. Tell 'em so.
//       res.status(401).send({ message: "Invalid token." });
//     }
//
//   }
// };
