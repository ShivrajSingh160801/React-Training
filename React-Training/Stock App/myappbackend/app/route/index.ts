import stockappRoutes  from './stockappRoutes'
import express from "express";

const router = express.Router();


router.use('/stock',stockappRoutes)


export default router;