const express = require("express");
const router = express.Router();
const indexController = require("../controllers/indexController");

router.get("/", (req, res) => {
  indexController.index(req, res);
});

router.post("/add-product", (req, res) => {
  indexController.addProduct(req, res);
});

router.get("/delete-product/:id", (req, res) => {
  indexController.deleteProduct(req, res);
});

router.get("/edit-product/:id", (req, res) => {
  indexController.getProductById(req, res);
});

router.post("/edit-product/:id", (req, res) => {
  indexController.updateProduct(req, res);
});
module.exports = router;
