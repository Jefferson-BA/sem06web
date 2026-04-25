import postService from "../services/postService.js";
import Post from "../models/Post.js"; 

class PostController {
  async getAll(req, res) {
    try {
      const posts = await postService.getPosts();
      res.render("posts", { posts });
    } catch (error) {
      res.status(500).send("Error al obtener posts");
    }
  }

  async create(req, res) {
    try {
      const { hashtags, ...rest } = req.body;
      const data = {
        ...rest,
        hashtags: hashtags ? hashtags.split(",").map(h => h.trim()).filter(h => h !== "") : [],
      };
      await postService.createPost(data);
      res.redirect("/posts");
    } catch (error) {
      res.status(400).send("Error de validación: " + error.message);
    }
  }

  async getEditForm(req, res) {
    try {
      const post = await Post.findById(req.params.id).lean();
      res.render("editPost", { post });
    } catch (error) {
      res.status(404).send("Post no encontrado");
    }
  }

  async update(req, res) {
    try {
      const { id } = req.params;
      const { hashtags, ...rest } = req.body;
      const data = {
        ...rest,
        hashtags: hashtags ? hashtags.split(",").map(h => h.trim()) : [],
      };
      await postService.updatePost(id, data);
      res.redirect("/posts");
    } catch (error) {
      res.status(400).send("Error al actualizar");
    }
  }

  async delete(req, res) {
    try {
      await postService.deletePost(req.params.id);
      res.redirect("/posts");
    } catch (error) {
      res.status(500).send("Error al eliminar");
    }
  }
}

export default new PostController();