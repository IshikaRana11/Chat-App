import mongoose from "mongoose";
const userSchema = mongoose.Schema(
  {
    fullname: {
      type: String,
      require: true,
    },
    username: {
      type: String,
      require: true,
    },
    password: {
      type: String,
      require: true,
      minlength: 6,
    },
    gender: {
      type: String,
      require: true,
      enum: ["female", "male"],
    },
    profilePic: {
      type: String,
      default: "",
    },
    //createdAt-->member since
  },
  { timestamps: true }
);
const User = mongoose.model("User", userSchema);
export default User;
