import Validator from "../app/model/validationManager";
import { Request, Response, NextFunction } from "express";

function validateData(req: Request, res: Response, next: NextFunction) {
  const name = req.body.name;
  const email = req.body.email;
  const password = req.body.password;
  const radio = req.body.radio;
  const phone = req.body.phone;
  const gender = req.body.gender;

  if (phone && !Validator.validatePhone(phone)) {
    return res.status(400).json({ error: "Invalid Phone Number" });
  }

  if (email && !Validator.validateEmail(email)) {
    return res.status(400).json({ error: "Invalid email" });
  }

  if (password && !Validator.validatePassword(password)) {
    return res
      .status(400)
      .json({
        error:
          "Invalid password! Error: Password must contain at least one digit, one lowercase letter, one uppercase letter, and be at least 8 characters long.",
      });
  }

  if (name && !Validator.validateName(name)) {
    return res.status(400).json({ error: "Invalid Name" });
  }

  if (gender && !Validator.validateString(gender)) {
    return res.status(400).json({ error: "Invalid Gender Selection" });
  }

  if (radio && !Validator.validateString(radio)) {
    return res.status(400).json({ error: "Invalid Radio Selection" });
  }

  next();
}

export default validateData;
