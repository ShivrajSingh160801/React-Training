import express from "express";
import postRoute from './PostRoute'

const route = express.Router();

route.use('/post',postRoute)

export default route;