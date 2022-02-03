const express = require('express')
const router = express.Router()
const nominationController = require('../controllers/nominations.controller')
const attachmentController = require('../controllers/attachments.controller')
const { uploader } = require('../services/files.services')

// define nomination routes
router.get('/data/view/:id', nominationController.get);
router.get('/data/view/', nominationController.getAll);
router.get('/data/user/:id', nominationController.getByUserID);
router.post('/data/create', nominationController.create);
router.post('/data/update/:id', nominationController.update);
router.post('/data/export/', nominationController.exporter);
router.post('/data/submit/:id', nominationController.submit);
router.get('/data/delete/:id', nominationController.delete);

// define attachments routes
router.post('/attachments/upload/:year/:id', uploader, attachmentController.upload);
router.get('/attachments/view/:id', attachmentController.getByNomination);
router.get('/attachments/download/:id', attachmentController.download);
router.get('/attachments/delete/:id', attachmentController.delete);

module.exports = router;
