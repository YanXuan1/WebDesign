const express = require('express');
const router = express.Router();
const {getAllUsers,userLogin}=require('../controller/userControllers')

router.get('/',getAllUsers);
router.post('/',userLogin);


module.exports = router;