const express = require('express');
const router = express.Router();
const {getProduct,addProduct,deleteProduct,updateProduct} = require('../controllers/productController');



router.get('/getProduct',getProduct);
router.post('/addProduct',addProduct);
router.delete('/deleteProduct/:id',deleteProduct);
router.put('/updateProduct/:id',updateProduct);


module.exports = router;