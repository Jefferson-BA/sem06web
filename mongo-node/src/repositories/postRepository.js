import Post from "../models/Post.js";

class PostRepository {
    async create(post) {
        return await Post.create(post);
    }

   async findAll() {
    return await Post.find().sort({ createdAt: -1 }).lean();
}

    async findByUser(userId) {
        return await Post.find({ user: userId });
    }

    async update(postId, postData) {
        return await Post.findByIdAndUpdate(
            postId,
            {
                ...postData,
                updatedAt: new Date(),
            },
            { new: true }
        );
    }

    async delete(postId) {
        return await Post.findByIdAndDelete(postId);
    }
}

export default new PostRepository();