import jwt from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";
const JWT_KEY = process.env.ACCESS_KEY as string;

const authenticateJWT = (req: Request, res: Response, next: NextFunction) => {
  let myReq: any = req;
  const authHeader = req.headers.authorization;
  const token = authHeader?.replace("Bearer ", "");
  if (token && token !== "null") {
    jwt.verify(token, JWT_KEY, (err: any) => {
      if (err) {
        return res
          .status(403)
          .send({ success: false, message: "Token Expired" });
      }
      let decode = jwt.decode(token);
      myReq.Auth = decode;
      next();
    });
  } else {
    res.status(403).json({ success: false, message: "UnAuthorized" });
  }
};
export default authenticateJWT;
