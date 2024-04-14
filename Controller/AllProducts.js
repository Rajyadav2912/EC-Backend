const Product = require("../Models/ProductModel");

const AllProducts = async (req, res) => {
  let products = await Product.find({});
  console.log("All Products Fetched Successfully", products);
  res.send(products);
};

module.exports = AllProducts ;
