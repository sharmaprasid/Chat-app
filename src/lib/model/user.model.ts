import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
  },
  verifyToken: String,
  isVerified: Boolean,
  forgetPasswordToken: String,
  isAdmin: Boolean,
  googleId:String,
  FacebookId:String,
  passwordExpiry: Date,
  activeStatus: {
    lastSeen: Date,
    isOnline: Boolean,
  },
  profile: {
    firstName: String,
    lastName: String,
    username: String,
    avatar: String,
    bio: String,
  },
  contacts: [
    {
      user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
      isFavorite: Boolean,
      isBlocked: Boolean,
    }
  ],
 
}, { timestamps: true });

const User = mongoose.models.User || mongoose.model("User", userSchema);

export default User;
