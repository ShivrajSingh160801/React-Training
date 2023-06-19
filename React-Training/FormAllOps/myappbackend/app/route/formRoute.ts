import formController from "../controller/formController";
import express from "express";
import validateData from "../../middleware/valid";

const router = express.Router();

router.post('/post',validateData,formController.post)

export default router;