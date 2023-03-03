const express = require('express');
const passport = require('passport');
const userMiddleware = require('../middlewares/userMiddleware');
const userController = require('../Controllers/UserController');
const router = express.Router();

router.post(
    '/register',
    userMiddleware.UserDuplicationPreventer,
    userController.register
);

router.post("/login", (req, res, next) => {
    passport.authenticate("local", (err, user, info) => {
        if (err) throw err;
        if (user.error) {
            res.status(401).json({ error: user.error });
        }
        else {
            console.log("Setting request");
            // this will trigger serialize and create a session
            req.login(user, (err) => {
                if (err) throw err;
                res.status(200).json({
                    userId: user._id,
                    username: user.username,
                    loggedIn: true
                });
            });
        }
    })(req, res, next);
});

// this will send an empty unauthorize
router.post(
    '/loginSimple',
    passport.authenticate('local', { passReqToCallback: "awit" }),
    (req, res) => {
        console.log('sending response');
        res.send("logged in");
    }
);

router.get("/login", (req, res) => {
    console.log("login session");
    console.log(req.session);
})

module.exports = router;