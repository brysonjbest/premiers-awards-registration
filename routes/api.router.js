const express = require('express')
const apiRouter = express.Router()
const nominationController = require('../controllers/nominations.controller')
const attachmentController = require('../controllers/attachments.controller')
const { uploader } = require('../services/files.services')

// time logging middleware
apiRouter.use(function timeLog (req, res, next) {
  const d = new Date();
  console.log('Request: ', req.path, d);
  next();
});

// define the home page route
apiRouter.get('/', function (req, res, next) {
  res.send('No content')
});

// define nomination routes
apiRouter.get('/nominations/view/:id', nominationController.get);
apiRouter.get('/nominations/view/', nominationController.getAll);
apiRouter.get('/nominations/user/:id', nominationController.getByUserID);
apiRouter.post('/nominations/create', nominationController.create);
apiRouter.post('/nominations/update/:id', nominationController.update);
apiRouter.post('/nominations/export/', nominationController.exporter);
apiRouter.post('/nominations/submit/:id', nominationController.submit);
apiRouter.get('/nominations/delete/:id', nominationController.delete);

// define attachments routes
apiRouter.post('/attachments/upload/:year/:id', uploader, attachmentController.upload);
apiRouter.get('/attachments/view/:id', attachmentController.getByNomination);
apiRouter.get('/attachments/download/:id', attachmentController.download);
apiRouter.get('/attachments/delete/:id', attachmentController.delete);

module.exports = apiRouter;
