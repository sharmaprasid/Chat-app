import mongoose from "mongoose";

const storySchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  content: String,
  timestamp: Date,
}, { timestamps: true });

const Story = mongoose.model("Story", storySchema);

export default Story;
