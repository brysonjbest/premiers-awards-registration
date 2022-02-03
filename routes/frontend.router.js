const express = require('express')
const path = require('path')
const router = express.Router()

// middleware that is specific to this routes
router.use(function timeLog (req, res, next) {
  const d = new Date();
  console.log('Request: ', req.path, d);
  next();
});

// serve SPA index page
router.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

console.log('Frontend served at: ', path.join(__dirname, 'views'))

module.exports = router;
