const express = require('express');
const router = express.Router();
const products = require('../controller/index.controller');

router.get('/', products.index);

module.exports = router;