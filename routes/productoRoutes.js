const express = require("express");
const productController = require("./../controllers/productoController");
//const authController = require("./../controllers/authController");
const productoRouter = express.Router();
//routes
productoRouter
  .route("/")
  //.all(authController.protect)
  .get(productController.getAllProducts)
  .post(productController.addProduct).put(productController.updateProduct);
productoRouter
  .route("/:id")
  //.all(authController.protect)
  .get(productController.getProductById).delete(productController.deleteProductById);

module.exports = productoRouter;
