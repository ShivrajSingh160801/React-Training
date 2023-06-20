import productController from "../controller/productController";
import express from "express";
import validateData from "../middleware/valid";
import Upload from "../middleware/fileMw";

const router = express.Router();

router.post('/post',validateData,Upload.single('image'),productController.post)
router.post('/categorypost',productController.CategoryPost)
router.get('/getCategory',productController.GetCategory)
router.get('/getProduct',productController.GetProduct)

export default router;