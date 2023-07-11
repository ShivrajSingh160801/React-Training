import { Request, Response } from "express";
import userRepo from "../repository/userRepo";
import { responsemodel } from "../model/responsemodel";
import jwt from "jsonwebtoken";
import { request } from "http";
let bcrypt = require("bcrypt");
let response = new responsemodel();

class userController {
  async post(req: Request, res: Response) {
    try {
      let { name, password, email } = req.body;
      let userData = {
        name,
        password,
        email,
      };
      const user = await userRepo.signup(userData);
      response.status = 200;
      response.message = "Data Created Successfull";
      response.data = { user };
      res.json(response);
    } catch (error: any) {
      response.status = 500;
      response.message = error;
      response.data = null;
      res.json(response);
    }
  }

  async loginCheck(req: any, res: Response) {
    try {
      const { email, password } = req.body;
      const GetUser = await userRepo.signin({ email, password });
      if (!GetUser) {
        return res.status(404).json({ message: "User not found" });
      }
      const isMatched = await bcrypt.compare(password, GetUser.password);

      if (!isMatched) {
        return res.status(401).json({ message: "Invalid credentials" });
      }
      const token = jwt.sign(
        { email: GetUser.email },
        process.env.ACCESS_KEY as string,
        {
          expiresIn: "3h",
        }
      );
      const refreshToken = jwt.sign(
        { email: GetUser.email },
        process.env.REFRESH_KEY as string
      );
      req.session.ACCESS_TOKEN=token;
      req.session.REFRESH_TOKEN=refreshToken;
      return res
        .status(200)
        .json({
          message: "Logged in successfully",
          data: { token, GetUser, refreshToken },
        });
    } catch (error: any) {
      return res.status(500).json({ message: "Something went wrong", error });
    }
  }
}

export default new userController();
