const express = require('express');
const router = express.Router();
const {userInfor,updateUserForPersonPage}=require('../controller/userControllers')

router.get('/',userInfor);

router.put('/',updateUserForPersonPage);


module.exports = router;