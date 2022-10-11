import catchAsync from "../utils/catch-async";
import { Request, Response, NextFunction } from "express";
import Product from "../model/products-model";
import Cart from "../model/cart-model";
import User from "../model/users-models";

export const addCartItem = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const { productId } = req.params;
    const { _id: id } = req.user;

    const product = await Product.findById(productId);
    const cart = await Cart.create({
      title: product?.title,
      price: product?.price,
      description: product?.description,
      image: product?.image,
      user: id,
    });

    res.status(200).json({
      status: "success",
      cart,
    });
  }
);
export const getCartItems = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const { _id: id } = req.user;
    const cart = await Cart.aggregate([
      {
        $match: { user: req.user?._id },
      },
    ]);

    res.status(200).json({
      status: "success",
      cart,
    });
  }
);
export const getCartItem = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params;
    const cart = await Cart.findById(id);

    res.status(200).json({
      status: "success",
      cart,
    });
  }
);
export const deleteCartItem = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params;
    await Product.findByIdAndDelete(id);
    res.status(204);
  }
);
