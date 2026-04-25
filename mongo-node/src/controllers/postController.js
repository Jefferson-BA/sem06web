import postService from "../services/postService.js";
import Post from "../models/Post.js";

class PostController {
  async getAll(req, res) {
    try {
      const posts = await postService.getFormattedPosts();
      res.render("posts", { posts });
    } catch (e) {
      res.status(500).render("error", { message: "Error al cargar posts" });
    }
  }

  async create(req, res) {
    try {
      await postService.prepareAndCreate(req.body);
      res.redirect("/posts");
    } catch (e) {
      res.status(400).send("Error de creación: " + e.message);
    }
  }

  async getEditForm(req, res) {
    try {
      const post = await Post.findById(req.params.id).lean();
      if (!post) return res.status(404).send("No encontrado");
      res.render("editPost", { post });
    } catch (e) {
      res.redirect("/posts");
    }
  }

  async update(req, res) {
    try {
      await postService.prepareAndUpdate(req.params.id, req.body);
      res.redirect("/posts");
    } catch (e) {
      res.status(400).send("Error al actualizar");
    }
  }

  async delete(req, res) {
    try {
      await postService.deletePost(req.params.id);
      res.redirect("/posts");
    } catch (e) {
      res.status(500).send("Error al eliminar");
    }
  }
}

export default new PostController();