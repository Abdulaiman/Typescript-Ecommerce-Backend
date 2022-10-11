import mongoose, { model, Schema, Types } from "mongoose";
import { Iproducts as Icarts } from "./products-model";

const CartSchema = new Schema<Icarts>({
  title: {
    type: String,
  },
  category: {
    Type: String,
  },
  price: String,
  description: String,
  image: String,
  user: {
    type: Schema.Types.ObjectId,
  },
});
const Cart = model<Icarts>("Cart", CartSchema);
export default Cart;
