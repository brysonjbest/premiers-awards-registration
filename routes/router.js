const express = require('express')
const router = express.Router()
const nominationController = require('../controllers/nominations.controller')
const filesController = require('../controllers/files.controller')
const {uploader} = require('../services/files.services')

// middleware that is specific to this routes
router.use(function timeLog (req, res, next) {
  const d = new Date();
  console.log('Request: ', req.path, d);
  next();
});

// define the home page route
router.get('/', function (req, res, next) {
  res.send('No content')
});

// define nomination routes
router.get('/nominations/view/:id', nominationController.get);
router.get('/nominations/view/', nominationController.getAll);
router.get('/nominations/user/:id', nominationController.getByUserID);
router.post('/nominations/create', nominationController.create);
router.post('/nominations/update/:id', nominationController.update);
router.post('/nominations/export/', nominationController.exporter);
router.post('/nominations/submit/:id', nominationController.submit);
router.get('/nominations/delete/:id', nominationController.delete);

// file processing
router.post('/attachments/upload/:year/:id', uploader, filesController.upload);
// router.post('/attachments/download/:year/:id/', uploader, filesController.upload);
// router.post('/attachments/delete/:id', uploader, filesController.delete);

module.exports = router;
