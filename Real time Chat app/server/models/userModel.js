import { genSalt, hash } from "bcrypt";
import mongoose from "mongoose";

const userSchma = new mongoose.Schema(
  {
    email: {
      type: String,
      required: [true, "Email is Required"],
      unique: true,
    },
    password: {
      type: String,
      required: [true, "Password is Required"],
    },
    firstName: {
      type: String,
      required: false,
    },
    lastName: {
      type: String,
      required: false,
    },
    image: {
      type: String,
      required: false,
    },
    color: {
      type: Number,
      required: false,
    },
    porfileSetup: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

userSchma.pre("save", async function name(next) {
  const salt = await genSalt();
  this.password = await hash(this.password, salt);
  next();
});

const User = mongoose.models.Users || mongoose.model("Users", userSchma);

export default User;
