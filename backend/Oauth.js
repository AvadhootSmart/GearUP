const GoogleStrategy = require("passport-google-oauth20").Strategy;
const GoogleUsers = require("./models/GoogleUsers");
const Users = require("./models/GoogleUsers");
const findOrCreate = require("mongoose-findorcreate");
require("dotenv").config();

// Configure Passport

exports.initializeGoogleAuth = (passport) => {
  passport.use(
    new GoogleStrategy(
      {
        clientID: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        callbackURL: "http://localhost:5000/auth/google/callback",
      },
      function (accessToken, refreshToken, profile, cb) {
        GoogleUsers.findOrCreate(
          {
            googleId: profile.id,
            googleName: profile.displayName,
          },
          function (err, user) {
            return cb(err, profile);
          }
        );
      }
    )
  );
  passport.serializeUser((user, done) => {
    done(null, user.id);
  });

  passport.deserializeUser((id, done) => {
    GoogleUsers.findById(id, (err, user) => {
      done(err, user);
    });
  });
};
