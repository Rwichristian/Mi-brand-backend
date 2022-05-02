const express = require('express');
const router = express.Router();
//const { signup,login, logout, getAllusers} = require('../controllers/usercontroller');
const { signup, login, getme } = require('../controllers/usercontroller');
//router.get('/' , getAllusers);

const {protect} = require('../middleware/authMiddleware');

router.post('/' , signup);
router.post('/login' , login);
router.get('/getme' , protect , getme);


//router.post('/login' , login);
//router.get('/logout',logout);


module.exports = router;  