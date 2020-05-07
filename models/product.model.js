const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  url: String,
  description: String,
  category: String
});

const Product = mongoose.model('Product', productSchema, 'products');

module.exports = Product;