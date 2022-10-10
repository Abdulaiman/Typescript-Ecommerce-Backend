import {
  addProduct,
  deleteProduct,
  getProduct,
  getProducts,
  updateProduct,
} from "../controllers/products-controller";
import { protect } from "../controllers/auth-controller";

const express = require("express");
const Router = express.Router();
Router.use(protect);
Router.route("/").post(addProduct).get(getProducts);
Router.route("/:id").get(getProduct).patch(updateProduct).delete(deleteProduct);

module.exports = Router;
