const express = require("express");
const Router = express.Router();
import { testing } from "../controllers/auth-controller";

Router.route("/").get(testing);

module.exports = Router;
