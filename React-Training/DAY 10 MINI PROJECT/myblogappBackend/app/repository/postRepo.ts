import { Post } from "../interface/ProjectInterface";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

class PostRepo {
  async create(createPost: Post) {
    const newPost = await prisma.post.create({
      data: createPost,
    });
    return newPost;
  }

  async get() {
    const getPost = await prisma.post.findMany();
    return getPost;
  }

  async update(putPost: Post, id: string) {
    const updatePost = await prisma.post.update({
      where: {
        id: id,
      },
      data: putPost,
    });
    return updatePost;
  }

  async delete(id: string) {
    const deletePost = await prisma.post.delete({
      where: {
        id: id,
      },
    });
    return deletePost;
  }
}

export default new PostRepo();
