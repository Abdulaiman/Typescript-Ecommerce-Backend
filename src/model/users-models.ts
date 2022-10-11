import { model, Schema, Types } from "mongoose";
import cart from "./cart-model";
const bcrypt = require("bcrypt");
const validator = require("validator");

interface Iuser {
  name: String;
  email: String;
  password: String;
  cart: Types.ObjectId;
  correctPassword: (candidatePassword: String, password: String) => boolean;
}

const UserSchema = new Schema<Iuser>(
  {
    name: {
      type: String,
      minlength: 5,
    },
    email: {
      type: String,
      unique: true,
      validate: [validator.isEmail, "please write a proper email format"],
    },
    password: String,
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

UserSchema.virtual("cart", {
  foreignField: "user",
  localField: "_id",
  ref: "Cart",
});

UserSchema.pre("save", async function (next) {
  if (!this.isModified("password")) next();
  this.password = await bcrypt.hash(this.password, 12);
  next();
});

UserSchema.methods.correctPassword = async (
  candidatePassword: String,
  password: String
) => {
  return await bcrypt.compare(candidatePassword, password);
};

const User = model<Iuser>("User", UserSchema);
export default User;
