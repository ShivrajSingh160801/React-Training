import formController from "../controller/formController";
import express from "express";
import validateData from "../../middleware/valid";
import Upload  from "../../middleware/fileMw";

const router = express.Router();

router.post('/post',Upload.single('file'),validateData,formController.post)

export default router;