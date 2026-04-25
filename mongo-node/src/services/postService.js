import postRepository from "../repositories/postRepository.js";
import userRepository from "../repositories/userRepository.js";

class PostService {
    async createPost(postData) {
        return await postRepository.create(postData);
    }

    async getPosts() {
        return await postRepository.findAll();
    }

    async updatePost(postId, data) {
        return await postRepository.update(postId, data);
    }

    async deletePost(postId) {
        return await postRepository.delete(postId);
    }
}

export default new PostService();