import catchAsync from "../utils/catch-async";
import { Request, Response, NextFunction } from "express";
import Product from "../model/products-model";

export const addProduct = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const product = await Product.create(req.body);

    res.status(200).json({
      status: "success",
      product,
    });
  }
);
