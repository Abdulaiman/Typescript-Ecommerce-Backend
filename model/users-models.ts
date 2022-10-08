import { model, Schema, Types } from "mongoose";
const validator = require("validator");

interface Iuser {
  name: String;
  email: String;
  password: String;
  cart: Types.ObjectId;
}

const UserSchema = new Schema<Iuser>({
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
  cart: {
    type: Schema.Types.ObjectId,
  },
});

const User = model<Iuser>("User", UserSchema);
export default User;
