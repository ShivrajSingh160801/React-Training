import stockappcontroller from "../controller/stockappcontroller";
import express from "express";
const router = express.Router();

router.post("/stockpost", stockappcontroller.stockPost);
router.post("/customerpost", stockappcontroller.CustomerPost);
router.get("/getstock", stockappcontroller.getStocks);
router.get("/getcustomer", stockappcontroller.getCustomers);
router.put("/updatestock/:id", stockappcontroller.updateStocks);
router.delete("/deleteorder/:id", stockappcontroller.deleteCustomer);
router.delete("/deletestock/:id", stockappcontroller.deleteStock);

export default router;
