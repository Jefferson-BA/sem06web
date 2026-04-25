import { Schema, model } from "mongoose";

const postSchema = new Schema({
  title: { type: String, minLength: 5, maxLength: 30, required: true },
  content: { type: String, minLength: 10, required: true },
  hashtags: [{ type: String }],
  imageUrl: { type: String },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date },
}, { versionKey: false }); 

export default model("Post", postSchema);