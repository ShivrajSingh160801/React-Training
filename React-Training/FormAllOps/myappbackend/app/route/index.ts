
import formRoute from './formRoute'
import express from "express";

const router = express.Router();


router.use('/form',formRoute)


export default router;
