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
router.get('/nominations/view/:id', nominationController.get);
router.get('/nominations/user/:id', nominationController.getByUserID);
router.post('/nominations/create', nominationController.create);
router.post('/nominations/update/:id', nominationController.update);
router.post('/nominations/submit/:id', nominationController.submit);
router.get('/nominations/delete/:id', nominationController.delete);

module.exports = router;
