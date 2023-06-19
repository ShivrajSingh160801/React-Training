import { Request, Response } from "express";
import { responsemodel } from "../model/responseModel";
import formRepo from "../repository/formUserRepo";

let response = new responsemodel();
class formController {
  async post(req: Request, res: Response) {
    try {
      const {
        password,
        name,
        email,
        gender,
        dateTime,
        number,
        radio,
        checkbox,
        color,
        file,
        slider
      } = req.body;

      const user = {
        password,
        name,
        email,
        gender,
        dateTime,
        number,
        radio,
        checkbox,
        color,
        file,
        slider
      };
      const postLibrary = await formRepo.post(user);
      response.status = 200;
      response.message = "Data Posted Successfull";
      response.data = postLibrary;
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

export default new formController();
