/*!
 * Index router
 * File: index.router.js
 * Copyright(c) 2022 BC Gov
 * MIT Licensed
 */

const express = require('express')
const router = express.Router()

/**
 * Liveness/Readiness probe test router
 */

router.get('/', function (req, res) {
  res.json('API is running.');
});
module.exports = router;
