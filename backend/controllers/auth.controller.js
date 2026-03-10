import {User}  from "../models/user.model.js";
import jwt, { decode } from "jsonwebtoken";
import bcrypt from "bcryptjs";
import sendEmail from "../utils/sendemail.js";

export const registerUser = async (req, res) => {
  const { username, password, email } = req.body;

  if (!username || !password || !email) {
    return res.status(400).json({
      message: "All fields are required",
    });
  }

  const userExists = await User.findOne({ email });

  if (userExists) {
    return res.status(400).json({
      message: "User already exists",
    });
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const user = await User.create({ username, password: hashedPassword, email });

  const token = jwt.sign(
    { userId: user._id, email: user.email },
    process.env.JWT_SECRET,
    { expiresIn: "1h" },
  );

  const verifyLink =`http://localhost:3000/auth/verify-email/${token}`;


   await sendEmail(
      email,
      "Verify your email",
      `Click here to verify: ${verifyLink}`
    );




  res.status(201).json({
    message: "User registered successfully!",
    token,
    user: {
      id: user._id,
      username: user.username,
      email: user.email,
    },
  });
}

export const loginUser = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({
      message: "Email and password are required",
    });
  }

  const user = await User.findOne({ email });
  if (!user) {
    return res.status(400).json({
      message: "Invalid email or password",
    });
  }

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    return res.status(400).json({
      message: "Invalid email or password",
    });
  }

  const token = jwt.sign({ userId: user._id, email: user.email }, process.env.JWT_SECRET, {
    expiresIn: "1h",
  });

  res.cookie("token", token, {
    httpOnly: true,
    secure: false,
    sameSite: "lax",
    maxAge: 3600000,
  });

  res.json({
    message: "User logged in successfully!",
    token,
  });
}

export const getProfile = async (req, res) => {
    
  const userId = req.user?.userId

  if (!userId) {
    return res.status(401).json({ message: "Unauthorized" })
  }

  const user = await User.findById(userId).select("_id username email")

  if (!user) {
    return res.status(404).json({ message: "User not found" })
  }

  res.json({
    id: user._id,
    username: user.username,
    email: user.email,
  })
}

export const logoutUser = (req, res) => {
    res.clearCookie("token");
    res.json({
        message: "User logged out successfully!"
    });
}

export const verifyEmail = async (req, res) => {

  try {

    const { token } = req.params;

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
        
    const user = await User.findById(decoded.userId);

    if (!user) {
      return res.status(400).json({
        message: "User not found"
      });
    }

    user.isVerified = true;

    await user.save();

     res.cookie("token", token, {
  httpOnly: true,
  secure: false,
  sameSite: "lax",  
  maxAge: 3600000,
});

    res.redirect("http://localhost:5174/profile")


    res.json({
      message: "Email verified successfully"
    });

  } catch (error) {

    res.status(400).json({
      message: "Invalid or expired token"
    });

  }

};