const LocalStrategy = require("passport-local").Strategy;
const bcrypt = require("bcryptjs");
const User = require("../models/user");

module.exports = function(passport) {
    passport.use(
        new LocalStrategy({ usernameField: "email"}, (email, password, done) => {
            User.findOne({ email: email})
                .then((user) => {
                    // if email is not registered
                    if (!user) {
                        console.log(email + " does not exist");
                        return done(null, false, { message: "That email is not registered"});
                    }
                    // if email is registered, check the password
                    bcrypt.compare(password, user.password, (err, isMatch) => {
                        if (err) { throw err; }
                        if (isMatch) {
                            console.log(user.email + " logged in");
                            return done(null, user);
                        } else {
                            console.log(user.email + " used wrong password");
                            return done(null, false, { message: "Password is incorrect"});
                        }

                    });
                })
                .catch((err) => console.log(err));
        })
    );

    passport.serializeUser((user, done) => {
        done(null, user.id);
    });

    passport.deserializeUser((id, done) => {
        User.findById(id, (err, user) => {
            done(err, user);
        });
    });
};