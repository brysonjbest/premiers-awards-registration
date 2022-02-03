const express = require('express')
const router = express.Router()
const attachmentController = require('../controllers/attachments.controller')
const { uploader } = require('../services/files.services')

// define attachments routes
router.post('/upload/:year/:id', uploader, attachmentController.upload);
router.get('/view/:id', attachmentController.getByNomination);
router.get('/download/:id', attachmentController.download);
router.get('/delete/:id', attachmentController.delete);

module.exports = router;
