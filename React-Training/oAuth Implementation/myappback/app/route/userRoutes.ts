import express from "express";
import userController from "../controller/userController";

const route = express.Router();

route.post('/signup',userController.post);
route.post('/signin',userController.loginCheck);

export default route;