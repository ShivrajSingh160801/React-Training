import { Request, Response } from "express";
import { responsemodel } from "../model/responseModel";
import productRepo from "../repository/productRepo";

let response = new responsemodel();

class productController {
  async post(req: Request, res: Response) {
    try {
      const { title, image, description, categoryId } = req.body;
      console.log('req.body: ', req.body);
      const product = {
        title,
        image,
        description,
        categoryId,
      };
      if (req.file) {
        product.image = req.file.filename;
      }
      console.log('req.file: ', req.file);
      
      const postProduct = await productRepo.post(product);
      response.status = 200;
      response.message = "Data Posted Successfully";
      response.data = postProduct;
      res.json(response);
    } catch (error: any) {
      console.log(error);
      response.status = 500;
      response.message = error;
      response.data = null;
      res.json(response);
    }
  }

  async CategoryPost(req: Request, res: Response) {
    try {
      const { name } = req.body;
      const category = {
      name
      };
      const CategoryPost = await productRepo.Categorypost(category);
      response.status = 200;
      response.message = "Category Posted Successfully";
      response.data = CategoryPost;
      res.json(response);
    } catch (error: any) {
      console.log(error);
      response.status = 500;
      response.message = error;
      response.data = null;
      res.json(response);
    }
  }

  async GetCategory(req: Request, res: Response) {
    try {
      const Category = await productRepo.getCategory();
      response.status = 200;
      response.message = "Category Fetched Successfully";
      response.data = Category;
      res.json(response);
    } catch (error: any) {
      console.log(error);
      response.status = 500;
      response.message = error;
      response.data = null;
      res.json(response);
    }
  }

  async GetProduct(req: Request, res: Response) {
    try {
      const Products = await productRepo.getProduct();
      response.status = 200;
      response.message = "Products Fetched Successfully";
      response.data = Products;
      res.json(response);
    } catch (error: any) {
      console.log(error);
      response.status = 500;
      response.message = error;
      response.data = null;
      res.json(response);
    }
  }

  async GetProductWithParams(req: Request, res: Response) {
    try {
    let searchValue = req?.params?.searchValue;
    let pageNumber = req?.params?.pageNumber;
    let sortOrder = req?.params?.sortOrder
      const Products = await productRepo.getProduct();
      response.status = 200;
      response.message = "Products Fetched Successfully";
      response.data = Products;
      res.json(response);
    } catch (error: any) {
      console.log(error);
      response.status = 500;
      response.message = error;
      response.data = null;
      res.json(response);
    }
  }
}




export default new productController();
