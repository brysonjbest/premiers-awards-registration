/*!
 * User router
 * File: user.router.js
 * Copyright(c) 2022 BC Gov
 * MIT Licensed
 */

const express = require('express');
const router = express.Router();
const authController = require('../controllers/user.controller');
const {authorizeSuperAdmin} = require('../services/auth.services')

/**
 * User routes.
 */

router.post('/register', authorizeSuperAdmin, authController.register);
router.get('/info', authController.info);
router.get('/login/', authController.login);
router.get('/logout/', authController.logout);
router.get('/view/', authorizeSuperAdmin, authController.getAll);
router.get('/view/:guid', authorizeSuperAdmin, authController.get);
router.post('/update/:guid', authorizeSuperAdmin, authController.update);
router.get('/delete/:guid', authorizeSuperAdmin, authController.remove);
module.exports = router;
