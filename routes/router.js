const express = require('express')
const router = express.Router()
const nominationController = require('../controllers/nominations.controller')

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
router.post('/nominations/', nominationController.getByUserID);
router.post('/nomination/:type/create', nominationController.create);
router.post('/nomination/:type/update', nominationController.update);
router.post('/nomination/:type/delete', nominationController.delete);
router.get('/nomination/:type/:id', nominationController.get);

module.exports = router;
