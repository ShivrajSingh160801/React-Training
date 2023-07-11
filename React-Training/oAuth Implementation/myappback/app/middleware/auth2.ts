import { error } from "console";
import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

const authenticateJWT = (req: any, res: Response, next: NextFunction) => {
  const accesstoken = req.session.ACCESS_TOKEN;
  const refreshToken = req.session.REFRESH_TOKEN;

  if (accesstoken) {
    try {
      jwt.verify(
        accesstoken as string,
        process.env.ACCESS_KEY as string,
        (err: any, user: any) => {
          if (err) {
            if (err.name == "TokenExpiredError") {
              jwt.verify(
                refreshToken as string,
                process.env.REFRESH_KEY as string,
                (err: any, user: any) => {}
              );
            } else {
              next();
            }
          }
        }
      );
    } catch (error) {}
  }
};
