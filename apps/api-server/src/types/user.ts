import { Document } from "mongoose";

export interface IUser extends Document {
    fullname: string;
    username?: string; // optional since your schema allows it
    avatar: string;
    password: string;
    role: string;
    refreshToken: string;
    isEmailVerified: Boolean;
    emailVerificationToken: string;
    emailVerificationTokenExpiry: string;
    passwordResetToken: string;
    passwordResetTokenExpiry: string;
    email: string;


    // Instance methods
    generateAuthToken(): string;
    comparePassword(password: string): Promise<boolean>;
}
