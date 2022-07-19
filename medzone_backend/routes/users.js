const router = require('express').Router();
const userController = require('../controllers/user.controller');

router.get('/',userController.afficheUser);
router.post('/register',userController.register);
router.post('/login',userController.login);

module.exports=router