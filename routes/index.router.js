const express = require('express')
const router = express.Router()

// middleware that is specific to this routes
router.use(function timeLog (req, res, next) {
  const d = new Date();
  console.log('Request: ', req.path, d);
  next();
});

router.get('/', function (req, res) {
  res.json('Here!!');
});

module.exports = router;
