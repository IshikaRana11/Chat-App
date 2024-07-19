import Conversation from "../models/conversation.model.js";
import Message from "../models/message.model.js";
import { getReceiverSocketId, io } from "../socket/socket.js";
export const sendMessage = async (req, resp) => {
  try {
    const { message } = req.body;
    const { id: receiverId } = req.params;
    const senderId = req.user._id;
    let conversation = await Conversation.findOne({
      participants: { $all: [senderId, receiverId] },
    });
    if (!conversation) {
      conversation = await Conversation.create({
        participants: [senderId, receiverId],
      });
    }
    console.log("ishika conversastion", conversation);
    const newMessage = new Message({
      senderId,
      receiverId,
      message,
    });
    if (newMessage) {
      if (conversation.messages) conversation.messages.push(newMessage._id);
    }
    await Promise.all([conversation.save(), newMessage.save()]);
    //socket IO functionality
    const receiverSocketId = getReceiverSocketId(receiverId);
    if (receiverSocketId) {
      io.to(receiverSocketId).emit("newMessage", newMessage);
    }
    resp.status(201).json(newMessage);
  } catch (err) {
    console.log("error while sending", err.message);
    resp.status(500).json({ message: "INTERNAL SERVER ERROR" });
  }
};
export const getMessage = async (req, resp) => {
  try {
    const { id: userToChatId } = req.params;
    const senderId = req.user._id;

    const conversation = await Conversation.findOne({
      participants: { $all: [senderId, userToChatId] },
    }).populate("messages");

    if (!conversation) resp.status(200).json([]);
    else {
      const messages = conversation.messages;
      resp.status(200).json(messages);
    }
  } catch (err) {
    console.log("error while sending", err.message);
    resp.status(500).json({ message: "INTERNAL SERVER ERROR" });
  }
};
