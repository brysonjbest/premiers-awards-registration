/*!
 * Nomination data controller
 * File: user.controller.js
 * Copyright(c) 2022 BC Gov
 * MIT Licensed
 */

const express = require('express');
const router = express.Router();
const nominationController = require('../controllers/data.controller');
const {authorizeData, authorizeUser, authorizeAdmin} = require('../services/auth.services')

/**
 * Nomination data routes
 */

router.get('/view/:id', authorizeData, nominationController.get);
router.get('/view/', authorizeAdmin, nominationController.getAll);
router.get('/user/:guid', authorizeUser, nominationController.getByUserID);
router.post('/create', nominationController.create);
router.post('/update/:id', authorizeData, nominationController.update);
router.post('/submit/:id', authorizeData, nominationController.submit);
router.get('/unsubmit/:id', authorizeAdmin, nominationController.unsubmit);
router.get('/delete/:id', authorizeData, nominationController.delete);
router.post('/export/:format', authorizeAdmin, nominationController.exporter);
router.post('/download/:id', authorizeAdmin, nominationController.download);
module.exports = router;
