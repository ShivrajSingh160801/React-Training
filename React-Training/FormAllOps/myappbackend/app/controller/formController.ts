import { Request, Response } from "express";
import { responsemodel } from "../model/responseModel";
import formRepo from "../repository/formUserRepo";

let response = new responsemodel();
class formController {
  async post(req: Request, res: Response) {
    console.log("req: ", req.body);
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
        slider,
      } = req.body;

      const user = {
        password,
        name,
        email,
        gender,
        dateTime,
        number: parseInt(number),
        radio,
        checkbox,
        color,
        file,
        slider: parseInt(slider),
      };
      if (req.file) {
        user.file = req.file.path;
        console.log('user.file: ', user.file);
      }
      console.log("user: ", user);
      const postLibrary = await formRepo.post(user);

      const response = {
        status: 200,
        message: "Data Posted Successfully",
        data: postLibrary,
      };

      res.json(response);
    } catch (error: any) {
      console.log(error);
      const response = {
        status: 500,
        message: error,
        data: null,
      };

      res.json(response);
    }
  }
}

export default new formController();
