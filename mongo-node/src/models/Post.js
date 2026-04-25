import mongoose from "mongoose";

const postSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      minlength: 5,
      maxlength: 30,
      required: true,
      trim: true, // Elimina espacios accidentales al inicio/final
    },
    content: {
      type: String,
      minlength: 10,
      required: true,
    },
    hashtags: [
      {
        type: String,
        trim: true,
      },
    ],
    imageUrl: {
      type: String,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: false, 
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Post", postSchema);