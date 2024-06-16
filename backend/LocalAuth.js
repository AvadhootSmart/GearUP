const LocalStrategy = require("passport-local").Strategy;
const UserModel = require("./models/User");

exports.initializePassport = (passport) => {
  passport.use(
    new LocalStrategy(async (username, password, done) => {
      const user = await UserModel.findOne({ username });

      if (!user) return done(null, false);

      if (user.password !== password) return done(null, false);

      return done(null, user);
    })
  );

  passport.serializeUser((user, done) => {
    done(null, user.id);
  });

  passport.deserializeUser((id, done) => {
    const user = UserModel.find(u => u.id === id);
    done(null, user);
  });
};

