import Post from "../repository/postRepo";
import { Request, Response } from "express";
import { responsemodel } from "../model/responseModel";

const response = new responsemodel();

class PostController {
  async createPost(req: Request, res: Response) {
    try {
      const { name, email, category, content, title } = req.body;
      const Createpost = await Post.create({
        name, email, category, content, title
      });
      response.status = 200;
      response.message = "Data Posted Successfull";
      response.data = Createpost;
      res.json(response);
    } catch (error: any) {
      console.log(error);
      response.status = 500;
      response.message = error;
      response.data = null;
      res.json(response);
    }
  }

  async getPosts(req: Request, res: Response) {
    try {
      const getPost = await Post.get();
      response.status = 200;
      response.message = "Data Fetched Successfull";
      response.data = getPost;
      res.json(response);
    } catch (error: any) {
      response.status = 500;
      response.message = error;
      response.data = null;
      res.json(response);
    }
  }

  async updatePosts(req: Request, res: Response) {
    try {
      const { name, email, category, content, title } = req.body;
      const id:string = req.params.id;
      const PostUpdate = { name, email, category, content, title }
      const update = await Post.update(PostUpdate,id);
      response.status = 200;
      response.message = "Data Updated Successfull";
      response.data = update;
      res.json(response);
    } catch (error: any) {
      response.status = 500;
      response.message = error;
      response.data = null;
      res.json(response);
    }
  }

  async deletePosts(req: Request, res: Response) {
    try {
      const id:string = req.params.id;
      const deletePost = await Post.delete(id);
      response.status = 200;
      response.message = "Data Deleted Successfull";
      response.data = deletePost;
      res.json(response);
    } catch (error: any) {
      response.status = 500;
      response.message = error;
      response.data = null;
      res.json(response);
    }
  }



}

export default new PostController();