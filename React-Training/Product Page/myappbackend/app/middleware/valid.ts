import { Request, Response, NextFunction } from "express";


function validateData(req: Request, res: Response, next: NextFunction) {

  console.log('req body: ', req.body);
  const { title, image, description, categoryId } = req.body;
  const product = {
    title,
    image,
    description,
    categoryId,
  };
  console.log('product validation: ', product);
  next();
}

export default validateData;
