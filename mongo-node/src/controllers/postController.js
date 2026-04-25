import postService from "../services/postService.js";

class PostController {
  async getAll(req, res) {
    const posts = await postService.getPosts();
    res.render("posts", { posts });
  }

  async create(req, res) {
    const { userId } = req.body;

    await postService.createPost(userId, req.body);
    res.redirect("/posts");
  }

  async update(req, res) {
    const { id } = req.params;
    await postService.updatePost(id, req.body);
    res.redirect("/posts");
  }

  async delete(req, res) {
    const { id } = req.params;
    await postService.deletePost(id);
    res.redirect("/posts");
  }
}

export default new PostController();