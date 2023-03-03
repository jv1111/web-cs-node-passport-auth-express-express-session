const session = require('express-session');

const oneDay = 1000 * 60 * 60 * 24;
module.exports = (app) => {
    app.use(session({
        secret: "thisismysecrctekeyfhrgfgrfrty84fwir767",
        saveUninitialized: true,
        cookie: {
            httpOnly: true,
            secure: false,
            maxAge: oneDay,
            sameSite: "none",
        },
        resave: false
    }));
};

