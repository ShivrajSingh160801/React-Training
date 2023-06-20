import productRoute from './productRoute'
import express from "express";

const router = express.Router();


router.use('/product',productRoute)


export default router;
