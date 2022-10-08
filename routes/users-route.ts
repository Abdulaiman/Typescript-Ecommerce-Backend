const express = require("express");
const Router = express.Router();
import { signUP } from "../controllers/auth-controller";

Router.route("/sign-up").post(signUP);

module.exports = Router;
