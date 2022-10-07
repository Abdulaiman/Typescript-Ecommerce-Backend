import catchAsync from "../utils/catch-async";
import { Request, Response, NextFunction } from "express";

export const testing = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    res.status(200).json({
      status: "success",
      message: "everything set successfully nice one",
    });
  }
);
