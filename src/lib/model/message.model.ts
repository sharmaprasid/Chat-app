import mongoose from "mongoose";

const messageSchema = new mongoose.Schema({
  text: String,
  timestamp: Date,
  sender: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  chat: { type: mongoose.Schema.Types.ObjectId, ref: 'Chat' },
  
});

const Message = mongoose.model("Message", messageSchema);

export default Message;
