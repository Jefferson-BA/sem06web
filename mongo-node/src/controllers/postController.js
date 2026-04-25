import postService from "../services/postService.js";

class PostController {
  async getAll(req, res) {
    try {
      const posts = await postService.getPosts();
      res.render("posts", { posts }); 
    } catch (error) {
      res.status(500).send("Error al obtener los posts");
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
      console.error(error);
      res.status(400).send("Error al crear: " + error.message);
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