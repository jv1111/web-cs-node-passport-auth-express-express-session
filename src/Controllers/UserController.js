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

const login = async (req, res) => {
    req.session.user = "jeremy";
    res.send("success");
}
const getSession = async (req, res) => {
    console.log(req.session);
    res.send("success");
}

module.exports = {
    register,
    login,
    getSession
}