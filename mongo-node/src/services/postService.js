import postRepository from "../repositories/postRepository.js";

class PostService {
  async getFormattedPosts() {
    return await postRepository.findAll();
  }

  async prepareAndCreate(body) {
    const data = {
      ...body,
      hashtags: body.hashtags 
        ? body.hashtags.split(",").map(h => h.trim()).filter(h => h !== "") 
        : []
    };
    return await postRepository.create(data);
  }

  async prepareAndUpdate(id, body) {
    const data = {
      ...body,
      hashtags: typeof body.hashtags === 'string' 
        ? body.hashtags.split(",").map(h => h.trim()) 
        : body.hashtags
    };
    return await postRepository.update(id, data);
  }

  async deletePost(id) {
    return await postRepository.delete(id);
  }
}

export default new PostService();