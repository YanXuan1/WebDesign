const express = require('express');
const router = express.Router();
const {deleteUserById,getAllUsers,updateUser}=require('../controller/userControllers')

router.get('/',getAllUsers);

router.delete('/:id',deleteUserById);

router.put('/',updateUser);



module.exports = router;