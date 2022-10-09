import { model, Schema, Types } from "mongoose";

interface Iproducts {
  title: String;
  category: String;
  price: String;
  description: String;
  image: String;
}

const ProductsSchema = new Schema<Iproducts>({
  title: {
    type: String,
  },
  category: {
    Type: String,
  },
  price: String,
  description: String,
  image: String,
});
const Product = model<Iproducts>("Product", ProductsSchema);
export default Product;
