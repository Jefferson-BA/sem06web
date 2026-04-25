import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
  title: { type: String, minLength: 5, maxLength: 30, required: true },
  content: { type: String, minLength: 10, required: true },
  hashtags: [{ type: String }],
  imageUrl: { type: String },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date },
});

export default mongoose.model("Post", postSchema);