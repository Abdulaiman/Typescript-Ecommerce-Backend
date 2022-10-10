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
export const getProducts = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const products = await Product.find();

    res.status(200).json({
      status: "success",
      products,
    });
  }
);
export const getProduct = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params;
    const product = await Product.findById(id);

    res.status(200).json({
      status: "success",
      product,
    });
  }
);
export const deleteProduct = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params;
    await Product.findByIdAndDelete(id);
    res.status(204);
  }
);
export const updateProduct = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params;
    const product = await Product.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.status(200).json({
      status: "success",
      product,
    });
  }
);
