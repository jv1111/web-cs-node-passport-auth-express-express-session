const express = require('express');
const userMiddleware = require('../middlewares/userMiddleware');
const userController = require('../Controllers/UserController');
const router = express.Router();

router.post(
    '/register',
    userMiddleware.UserDuplicationPreventer,
    userController.register
);

module.exports = router;