/*!
 * Attachments router
 * File: attachments.controller.js
 * Copyright(c) 2022 BC Gov
 * MIT Licensed
 */

const express = require('express')
const router = express.Router()
const attachmentController = require('../controllers/attachments.controller');
const { uploader } = require('../services/files.services');
const {authorizeData, authorizeAttachment} = require('../services/auth.services')


/**
 * Attachment files routes
 */

router.post('/upload/:year/:id', uploader, attachmentController.upload);
router.get('/view/:id', authorizeData, attachmentController.getByNomination);
router.get('/download/:id', authorizeAttachment, attachmentController.download);
router.get('/delete/:id', authorizeAttachment, attachmentController.delete);
module.exports = router;
