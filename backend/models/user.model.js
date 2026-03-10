import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true,
  },
  // hashed password
  password: {
    type: String,
    required: true,
  },
  // email verification status
  isVerified: {
    type: Boolean,
    default: false,
  },
}, { timestamps: true });

export const User = mongoose.model("User", userSchema);