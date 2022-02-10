/*!
 * Nomination data controller
 * File: user.controller.js
 * Copyright(c) 2022 BC Gov
 * MIT Licensed
 */

const express = require('express');
const router = express.Router();
const settingsController = require('../controllers/settings.controller');
const {authorizeData, authorizeUser, authorizeAdmin} = require('../services/auth.services')

/**
 * Nomination data routes
 */

router.get('/get/:id', authorizeData, settingsController.get);
router.get('/type/:type/', authorizeData, settingsController.getByType);
module.exports = router;
