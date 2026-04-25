import express from "express";
import postController from "../controllers/postController.js";
import { validatePost } from "../middlewares/validator.js";

const router = express.Router();

router.get("/", postController.getAll);
router.post("/create", validatePost, postController.create); 
router.get("/edit/:id", postController.getEditForm);
router.post("/update/:id", validatePost, postController.update); 
router.get("/delete/:id", postController.delete);

export default router;