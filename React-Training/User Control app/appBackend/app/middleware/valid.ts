import Validator from "../model/validationManager";
import { Request, Response, NextFunction } from "express";

function validateSignupData(req: Request, res: Response, next: NextFunction) {
  const email = req.body.email;
  const password = req.body.password;
  const name = req.body.name;
  const phone = req.body.phone;

  if (phone && !Validator.validatePhone(phone)) {
    return res.status(400).json({ error: "Invalid Phone Number" });
  }

  if (email && !Validator.validateEmail(email)) {
    return res.status(400).json({ error: "Invalid email" });
  }

  if (password && !Validator.validatePassword(password)) {
    return res.status(400).json({ error: "Invalid password! Error: Password must contain at least one digit, one lowercase letter, one uppercase letter, and be at least 8 characters long." });
  }

  if (name && !Validator.validateName(name)) {
    return res.status(400).json({ error: "Invalid Name" });
  }

  next();
}

export default validateSignupData;
