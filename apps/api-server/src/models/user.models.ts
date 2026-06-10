import mongoose, { model, Schema } from "mongoose";
import { AvailableUserRoles, UserRolesEnum } from "../utils/constants.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const userSchema = new Schema({
  avatar: {
    type: {
      url: String,
      localPath: String,
    },
    default: {
      url: `https://placehold.co/200x200`,
      localPath: "/",
    },
  },
  fullname: {
    type: String,
    trim: true,
  },
  username: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
    index: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
    index: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },

  role: {
    type: String,
    enum: AvailableUserRoles,
    default: UserRolesEnum.USER,
  },
  isEmailVerified: {
    type: Boolean,
    default: false,
  },
  emailVerificationToken: {
    type: String,
    default: null,
  },
  emailVerificationTokenExpiry: {
    type: Date,
    default: null,
  },
  passwordResetToken: {
    type: String,
  },
  passwordResetTokenExpiry: {
    type: Date,
  },
  refreshToken: {
    type: String,
  },
});

// pre hooks
userSchema.pre("save", async function () {
  if (!this.isModified(this.password)) return;
  this.password = await bcrypt.hash(this.password, 10);
});

userSchema.methods.comparePassword = async function (password: string) {
    return bcrypt.compare(password, this.password);
}



const UserModel = model.User || model("User", userSchema);
export default UserModel;
