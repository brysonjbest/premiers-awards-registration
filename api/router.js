const express = require('express')
const router = express.Router()
const indexController = require('./controllers/index.controller')

// middleware that is specific to this router
router.use(function timeLog (req, res, next) {
  const d = new Date();
  console.log('Request: ', d);
  next();
})

// define the home page route
router.get('/', function (req, res, next) {
  res.send('Registration Homepage')
})

// define the about route
router.get('/about', function (req, res, next) {
  res.send('About Registration')
})

module.exports = router
