const userModel = require('../models/UserModel.js')

// prevent user duplication
const UserDuplicationPreventer = async (req, res, next) => {
    console.log("usermiddleware:");
    const username = req.body.username;
    const user = await userModel.findOne({
        username: username
    });
    if (user) {
        console.log("username already exist");
        return res.status(409).json({
            error: "username already exist"
        });
    }
    next();
}

module.exports = {
    UserDuplicationPreventer
}