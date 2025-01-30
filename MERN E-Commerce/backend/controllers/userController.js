import userModel from "../models/userModel.js";
import validator from "validator";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const createToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET);
};

const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    //  check if email exist or not
    const user = await userModel.findOne({ email });
    if (!user) {
      return res.json({ success: false, mssage: "user does not exist" });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (isMatch) {
      const token = createToken(user._id);
      res.json({ success: true, token });
    } else {
      res.json({ success: false, message: "Invalid password" });
    }
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    // checkiong user exist or not
    const exist = await userModel.findOne({ email });
    if (exist) {
      return res.json({ success: false, mssage: "user alredy exist" });
    }

    // validating email and password
    if (!validator.isEmail(email)) {
      return res.json({ success: false, mssage: "Please enter a valid email" });
    }
    if (!validator.isStrongPassword(password)) {
      return res.json({
        success: false,
        mssage: "Please enter a  strong password",
      });
    }

    // hashing password

    const solt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, solt);

    const newUser = new userModel({
      name,
      email,
      password: hashedPassword,
    });

    const user = await newUser.save();

    const token = createToken(user._id);

    res.json({ success: true, token });
  } catch (error) {
    console.log(error);
    res.json({ success: false, mssage: error.mssage });
  }
};

const adminLogin = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Validate admin credentials
    if (
      email === process.env.ADMIN_EMAIL &&
      password === process.env.ADMIN_PASSWORD
    ) {
      // Create a JWT token

      const token = jwt.sign({ email }, process.env.JWT_SECRET);
      return res.json({ success: true, token });
    }
    res.json({ success: false, message: "Invalid credentials" });
  } catch (error) {
    console.error(error); // Log detailed error
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};

export { loginUser, registerUser, adminLogin };
