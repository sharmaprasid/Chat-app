import mongoose from "mongoose";

const chatSchema = new mongoose.Schema({
  name: String,
  members: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
  type: String, // 'one-on-one' or 'group'
 
});

const Chat =  mongoose.models.Chat||mongoose.model("Chat", chatSchema);

export default Chat;
