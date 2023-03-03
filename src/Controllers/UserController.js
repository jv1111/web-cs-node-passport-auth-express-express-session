const service = require('../Services/UserService');

const register = async (req, res) => {
    try {
        console.log("register");
        const { username, password } = req.body;
        const user = await service.register(username, password);
        res.status(201).json(user);
    } catch (error) {
        console.log(error);
        res.status(500).json({
            error: error
        });
    }
}

module.exports = {
    register
}