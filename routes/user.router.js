/*!
 * User router
 * File: user.router.js
 * Copyright(c) 2022 BC Gov
 * MIT Licensed
 */

const express = require('express');
const router = express.Router();
const authController = require('../controllers/user.controller');
const {authorizeAdmin, authorizeSuperAdmin} = require('../services/auth.services')

/**
 * User routes.
 */

router.post('/register', authController.register);
router.get('/login/', authController.login);
router.get('/logout/', authController.logout);
router.get('/info', authController.info);
router.get('/activate/:guid', authorizeAdmin, authController.activate);
router.get('/view/', authorizeAdmin, authController.getAll);
router.get('/view/:guid', authorizeAdmin, authController.get);
router.post('/update/:guid', authorizeAdmin, authController.update);
router.get('/delete/:guid', authorizeAdmin, authController.remove);
router.post('/assign/:guid', authorizeSuperAdmin, authController.assign);
module.exports = router;
