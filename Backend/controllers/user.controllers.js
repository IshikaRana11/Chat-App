import User from "../models/user.model.js";
export const getUsersForSidebar = async (req, resp) => {
  try {
    const loggedInUserId = req.user._id;
    console.log(loggedInUserId);
    const filteredUsers = await User.find({
      _id: { $ne: loggedInUserId },
    }).select("-password");
    console.log(req.body);
    resp.status(200).json(filteredUsers);
  } catch (error) {
    console.log("error in side bar ", error.message);
    resp.status(500).json({ error: "Internal server error" });
  }
};
export default getUsersForSidebar;
