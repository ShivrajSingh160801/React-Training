import express from "express";
import userController from "../controller/userController";
import authenticateJWT from "../middleware/auth";
import valid from "../middleware/valid"

const route = express.Router();

route.post('/post',valid,userController.post)
route.post('/login',valid,userController.loginCheck)
route.get('/getSupplier',userController.getSupllier)
route.post('/postSupplier',userController.postSupplier)
route.post('/postTable',userController.postTableEntry)
route.get('/getTable',userController.getTableEntry)

// route.get('/getuser',authenticateJWT,studentController.getuser)

export default route;