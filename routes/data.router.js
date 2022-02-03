const express = require('express')
const router = express.Router()
const nominationController = require('../controllers/nominations.controller')

// define nomination routes
router.get('/view/:id', nominationController.get);
router.get('/view/', nominationController.getAll);
router.get('/user/:id', nominationController.getByUserID);
router.post('/create', nominationController.create);
router.post('/update/:id', nominationController.update);
router.post('/export/', nominationController.exporter);
router.post('/submit/:id', nominationController.submit);
router.get('/delete/:id', nominationController.delete);

module.exports = router;
