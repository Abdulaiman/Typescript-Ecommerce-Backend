import catchAsync from "../utils/catch-async";
import { Request, Response, NextFunction } from "express";
import User from "../model/users-models";
const jwt = require("jsonwebtoken");

export const signUP = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const user = await User.create(req.body);
    const token = jwt.sign({ id: user._id }, process.env.SECRET_KEY, {
      expiresIn: process.env.TOKEN_EXPIRES_IN,
    });
    res.status(200).json({
      status: "success",
      token,
      user,
    });
  }
);
