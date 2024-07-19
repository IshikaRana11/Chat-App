import User from "../models/user.model.js";
import bycrptjs from "bcryptjs";
import generateTokenAndSetCookie from "../utils/generateToken.js";
export const signupUser = async (req, resp) => {
  try {
    const { fullname, username, password, confirmPassword, gender } = req.body;
    if (password != confirmPassword) {
      return resp.status(400).json({ error: "wrong password" });
    }
    const user = await User.findOne({ username });
    if (user) {
      return resp.status(400).json({ error: "user already exist" });
    }
    //hash password here
    const salt = await bycrptjs.genSalt(10);
    const hashPassword = await bycrptjs.hash(password, salt);

    const boyprofilePic = `https://avatar.iran.liara.run/public/boy?username=${username}`;
    const girlprofilePic = `https://avatar.iran.liara.run/public/girl?username=${username}`;

    const newUser = new User({
      fullname,
      username,
      password: hashPassword,
      gender,
      profilePic: gender === "female" ? girlprofilePic : boyprofilePic,
    });
    if (newUser) {
      generateTokenAndSetCookie(newUser._id, resp);
      await newUser.save();
      console.log(req.body);
      resp.status(201).json({
        _id: newUser._id,
        fullname: newUser.fullname,
        username: newUser.username,
        profilePic: newUser.profilePic,
      });
    } else {
      resp.status(400).json({ error: "Invalid user data" });
    }
  } catch (err) {
    console.log("error in signup controller", err);
    resp.status(500).json({ err: "Internal server error" });
  }
};

export const loginUser = async (req, resp) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username });
    const isPasswordCorrect = await bycrptjs.compare(
      password,
      user?.password || ""
    );
    if (!user || !isPasswordCorrect) {
      return resp.status(500).json({ error: "Invalid credentials " });
    }
    generateTokenAndSetCookie(user._id, resp);
    resp.status(200).json({
      _id: user._id,
      fullname: user.fullname,
      username: user.username,
      profilePic: user.profilePic,
    });
  } catch (err) {
    console.log("error in login controller", err);
    resp.status(500).json({ err: "Internal server error" });
  }
};
export const logoutUser = async (req, resp) => {
  try {
    resp.cookie("jwt", "", { maxAge: 0 });
    resp.status(200).json({ message: "log out successfully" });
  } catch (err) {
    console.log("error in logout controller", err);
    resp.status(500).json({ err: "Internal server error" });
  }
};
