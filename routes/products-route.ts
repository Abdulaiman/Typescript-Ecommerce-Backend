import { addProduct } from "../controllers/products-controller";

const express = require("express");
const Router = express.Router();

Router.route("/").post(addProduct);

module.exports = Router;
