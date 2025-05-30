const express = require('express');
const {
  addProduct,
  getProducts,
  getProduct,
  deleteProduct,
} = require('../controllers/productController');
const router = express.Router();

router.post('/products', addProduct);
router.get('/products', getProducts);
router.get('/products/:id', getProduct);
router.delete('/product/:id', deleteProduct);

module.exports = router;
