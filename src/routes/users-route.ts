const express = require("express");
const Router = express.Router();
const cartRouter = require("./cart-route");
import { login, signUP } from "../controllers/auth-controller";

Router.route("/sign-up").post(signUP);
Router.route("/login").post(login);
Router.use("/cart", cartRouter);
module.exports = Router;
