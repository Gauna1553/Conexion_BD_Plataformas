const express =  require('express');
const router = express.Router();
const userController = require('../controllers/userControllers');

router.get('/users',userController.getAllUsers);

module.exports = router;