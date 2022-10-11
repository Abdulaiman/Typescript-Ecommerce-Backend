import { protect } from "../controllers/auth-controller";
import {
  addCartItem,
  // deleteAllCartItem,
  deleteCartItem,
  getCartItem,
  getCartItems,
} from "../controllers/cart-controller";

const express = require("express");
const Router = express.Router({ mergeParams: true });
Router.use(protect);
Router.route("/:productId").post(addCartItem).get(getCartItems);
Router.route("/:id").get(getCartItem).delete(deleteCartItem);
module.exports = Router;
