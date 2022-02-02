const express = require('express')

// Initialize index router
const path = __dirname + '/views/';

const indexRouter = express.Router();
indexRouter.get('/', function(req, res) {
  res.sendFile(path + "index.html");
});

module.exports = indexRouter;
