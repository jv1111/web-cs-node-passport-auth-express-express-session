const UserModel = require('./models/UserModel');
const bcrypt = require('bcrypt');
const LocalStrategy = require("passport-local").Strategy;

module.exports = (passport) => {
    passport.use(new LocalStrategy(
        async (username, password, done) => {
            console.log('localStrategy')
            const user = await UserModel.findOne({ username: username });
            if (!user) {
                return done(null, {error: "Invalid username"});
            }
            const validPassword = await bcrypt.compare(password, user.password);
            if (!validPassword) {
                return done(null, { error: "invalid password" });
            }
            return done(null, user);//User will be sent to passport.authenticate(user) and redirect to serialize
        }
    ));
    passport.serializeUser((user, cb) => {
        console.log('serialize');
        cb(null, user);
    });
    passport.deserializeUser((user, cb) => {
        console.log('deserialize');
        console.log(user);
    });
}

