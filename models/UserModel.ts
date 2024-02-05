import mongoose, { Document } from "mongoose";

// Define an interface for a user document
interface UserDocument extends Document {
  name: string;
  username: string;
  email: string;
  password: string;
  isVerified: boolean;
  role: string;
  forgotPasswordToken?: string;
  forgotPasswordTokenExpiry?: Date;
  verifyToken?: string;
  verifyTokenExpiry?: Date;
}

// Define a Mongoose schema based on the interface
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please provide a name"],
    unique:false,
  },
  username: {
    type: String,
    required: [true, "Please provide a username"],
    unique: true,
  },
  email: {
    type: String,
    required: [true, "Please provide an email"],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "Please provide a password"],
  },
  isVerified: {
    type: Boolean,
    default: false,
  },
  role: {
    type: String,
    default: "guest",
  },
  forgotPasswordToken: String,
  forgotPasswordTokenExpiry: Date,
  verifyToken: String,
  verifyTokenExpiry: Date,
});

// Define and export the User model
const User =
  mongoose.models.users || mongoose.model<UserDocument>("users", userSchema);

export default User;
