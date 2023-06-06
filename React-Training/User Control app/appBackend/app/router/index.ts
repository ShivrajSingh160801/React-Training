import express from "express";
import userRoute from "./userRoutes";

const route = express.Router();

route.use("/user", userRoute);

export default route;
