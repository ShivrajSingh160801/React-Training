import postController from "../controller/postController";
import express from "express";
const route = express.Router();

route.post('/newpost',postController.createPost)
route.get('/getpost',postController.getPosts)
route.put('/update/:id',postController.updatePosts)
route.delete('/delete/:id',postController.deletePosts)

export default route;