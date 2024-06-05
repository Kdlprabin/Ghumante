import mongoose, { Schema, Document } from "mongoose";

export interface Auth extends Document {
  email: string;
  password: string;
  role: string;
  isVerified: boolean;
  verifyCode: string;
  createdAt: Date;
  updatedAt: Date;
}

const AuthSchema: Schema<Auth> = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    match: [/.+\@.+\..+/, "Please use a valid email address"],
  },
  password: {
    type: String,
    required: true,
    match: [
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm,
      "Password must contain at least 8 characters, including UPPER/lowercase, numbers and special characters",
    ],
  },
  role: {
    type: String,
    required: true,
    enum: ["user", "admin", "v_admin", "h_admin"],
    default: "user",
  },
  verifyCode: { type: String, required: true },
  isVerified: { type: Boolean, required: true, default: false },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

const AuthModel =
  (mongoose.models.Auth as mongoose.Model<Auth>) ||
  mongoose.model("Auth", AuthSchema);

export default AuthModel;