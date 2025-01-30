import jwt from "jsonwebtoken";

const adminAuth = async (req, res, next) => {
  try {
    const { token } = req.headers;

    if (!token) {
      return res.json({
        success: false,
        message: "Not authorized login again 1",
      });
    }
    const token_decode = jwt.verify(token, process.env.JWT_SECRET);

    const com_token = String(token_decode["email"]);
    const com_email = String(process.env.ADMIN_EMAIL);

    if (com_token !== com_email) {
      return res.json({
        success: false,
        message: "Not authorized, login again2",
      });
    }

    next();
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

export default adminAuth;
