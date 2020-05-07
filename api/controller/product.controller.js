/* const db = require('../db');
const dbGet = db.get('products'); */  // for not use Mongoose

let Product = require('../../models/product.model');

module.exports.index = async (req, res) => {
  const products = await Product.find();
  res.json(products)  ;
}