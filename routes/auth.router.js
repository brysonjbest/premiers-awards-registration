const express = require('express')
const router = express.Router()
const authController = require('../controllers/auth.controller')
const { authorize } = require('../services/auth.services')

// middleware that is specific to this routes
router.use(function timeLog (req, res, next) {
  const d = new Date();
  console.log('Request: ', req.path, d);
  next();
});

// define authentication/user admin routes
router.post('/register', authorize, authController.register);
// router.post('/update/:id', authController.update);
// router.post('/delete/:id', authController.remove);
router.get('/view/:id', authorize, authController.get);
router.get('/login/', authorize, authController.login);
router.post('/logout/', authorize, authController.logout);
// router.post('/refresh/', authController.refresh);

module.exports = router;
