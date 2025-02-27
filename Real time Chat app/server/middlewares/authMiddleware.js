import { compare } from "bcrypt";
import User from "../models/userModel.js";
import jwt from "jsonwebtoken";

const maxAge = 2592000000;

const createToken = (email, userId) => {
  return jwt.sign({ email, userId }, process.env.JWT_KEY, {
    expiresIn: maxAge,
  });
};

export const singUp = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    if (!email && !password) {
      return res
        .status(400)
        .json({ success: false, message: "Email and passwrod is Required" });
    }

    const user = await User.create({
      email,
      password,
    });

    res.cookie("jwt", createToken(email, user?._id), {
      maxAge,
      secure: true,
      sameSite: "none",
    });

    return res.status(201).json({
      user: {
        id: user._id,
        email: user.email,
        porfileSetup: user.porfileSetup,
      },
    });
  } catch (error) {
    console.log(error.message);
    return res
      .status(500)
      .json({ success: false, message: "Internal server error" });
  }
};

export const login = async (req, res, next) => {
  try {
    const { email, password } = req.query;

    if (!email && !password) {
      return res
        .status(400)
        .json({ success: false, message: "Email and passwrod is Required" });
    }

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "user with the given email is not found",
      });
    }

    const auth = await compare(password, user.password);

    if (!auth) {
      return res.status(400).json({
        success: false,
        message: "Password is incorrect",
      });
    }

    res.cookie("jwt", createToken(email, user?._id), {
      maxAge,
      secure: true,
      sameSite: "none",
    });
    return res.status(200).json({
      user: {
        id: user._id,
        email: user.email,
        porfileSetup: user.porfileSetup,
        firstName: user.firstName || "",
        lastName: user.lastName || "",
        image: user.image || "",
        color: user.color || "",
      },
    });
  } catch (error) {
    console.log(error.message);
    return res
      .status(500)
      .json({ success: false, message: "Internal server error" });
  }
};
