const Product = require("../models/product.model");

module.exports.index = async (req, res) => {
  const products = await Product.find({"category": "picture"});
  res.render("products/pictures.pug", {
    products: products
  });
}; 