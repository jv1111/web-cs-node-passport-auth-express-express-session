const bcrypt = require('bcrypt');
const UserModel = require('../models/UserModel');

const register = async (username, password) => {
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    const user = new UserModel({ username, password: hashedPassword });
    await user.save();
    return {
        userId: user._id,
        username: user.username
    }
}

module.exports = {
    register
}