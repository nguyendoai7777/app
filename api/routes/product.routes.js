const express = require('express');
const router = express.Router();
const products = require('../controller/product.controller');

router.get('/', products.index);

module.exports = router;