// routes/apiRoutes.js
const express = require('express');
const router = express.Router();
const { isAuthentictedUser } = require("../middleWare/auth");
const apiController = require('../controller/cheching.js');

router.route('/test').get(isAuthentictedUser, apiController.getData);

module.exports = router;
