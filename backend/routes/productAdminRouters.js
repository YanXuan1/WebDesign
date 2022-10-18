const express = require('express');
const router = express.Router();
const {getAllProducts,updateProduct,deleteProductById,createProducts}=require('../controller/productControllers')

router.get('/',getAllProducts);


router.put('/',updateProduct);
router.delete('/:id',deleteProductById);
router.post('/',createProducts);

module.exports = router;