const Product = require("../models/product");

class IndexController {
  constructor() {}
  async index(req, res) {
    let prd = await Product.find();
    res.json(prd);
  }

  async addProduct(req, res) {
    const { name, price, stock } = req.body;
    const newProduct = new Product({
      name,
      price,
      stock,
    });
    newProduct.save();
    res.json({
      message: "Product added successfully",
      product: newProduct,
      status: 200,
    });
  }

  async deleteProduct(req, res) {
    const { id } = req.params;
    const deletedProduct = await Product.findByIdAndDelete(id);
    res.json({
      message: "Product deleted successfully",
      status: 200,
    });
  }

  async getProductById(req, res) {
    const { id } = req.params;
    const product = await Product.findById(id);
    res.json({
      message: "Product fetched successfully",
      product: product,
      status: 200,
    });
  }

  async updateProduct(req, res) {
    const { id } = req.params;
    const { name, price, stock } = req.body;
    const updatedProduct = await Product.findByIdAndUpdate(
      id,
      {
        name: name,
        price: price,
        stock: stock,
      },
      { new: true },
    );
    res.json({
      message: "Product updated successfully",
      product: updatedProduct,
      status: 200,
    });
  }
}
module.exports = new IndexController();
