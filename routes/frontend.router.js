const express = require('express')
const router = express.Router()

// middleware that is specific to this routes
router.use(function timeLog (req, res, next) {
  const d = new Date();
  console.log('Request: ', req.path, d);
  next();
});

// serve SPA index page
router.get('/', function (req, res) {
    res.sendFile('/app/views/index.html');
});

module.exports = router;
