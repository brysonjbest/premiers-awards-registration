/*!
 * Table Registration Frontend static file router
 * File: index-tableregistration.router.js
 * Copyright(c) 2022 BC Gov
 * MIT Licensed
 */

const express = require('express')
const router = express.Router()

/**
 * Serve index page.
 */

console.log('loading router page');

router.get('/', function (req, res) {
    console.log('this is loading');
    //res.send("Some HTML Test")
    res.sendFile('/app/table_registration/views/index.html');
});

module.exports = router;
