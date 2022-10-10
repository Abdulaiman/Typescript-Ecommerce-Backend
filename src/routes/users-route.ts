const express = require("express");
const Router = express.Router();
import { login, signUP } from "../controllers/auth-controller";

Router.route("/sign-up").post(signUP);
Router.route("/login").post(login);

module.exports = Router;
