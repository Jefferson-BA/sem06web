export const validatePost = (req, res, next) => {
  const { title, content } = req.body;
  if (!title || title.length < 5) {
    return res.status(400).send("El título debe tener al menos 5 caracteres.");
  }
  if (!content || content.length < 10) {
    return res.status(400).send("El contenido debe tener al menos 10 caracteres.");
  }
  next(); 
};