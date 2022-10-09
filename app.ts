const express = require("express");

import { Request, Response } from "express";
const userRouter = require("./routes/users-route");

const app = express();
app.use(express.json());


app.use("/api/v1/users", userRouter);

app.all("*", (req: Request, res: Response) => {
  res.status(400).json({
    status: "not found",
    message: `there is no such route as ${req.url}`,
  });
});
module.exports = app;
