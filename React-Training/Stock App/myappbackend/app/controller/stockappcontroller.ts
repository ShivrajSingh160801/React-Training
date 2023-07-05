import { Request, Response } from "express";
import { responsemodel } from "../model/responseModel";
import stockapprepo from "../repo/stockapprepo";

let response = new responsemodel();

class stockController {
  async stockPost(req: Request, res: Response) {
    try {
      const { stockname, quantity ,stockordered } = req.body;
      const stockData = {
        stockname,
        quantity,
        stockordered
      };
      const poststock = await stockapprepo.stockPost(stockData);
      response.status = 200;
      response.message = "Stock Posted Successfully";
      response.data = poststock;
      res.json(response);
    } catch (error: any) {
      console.log(error);
      response.status = 500;
      response.message = error;
      response.data = null;
      res.json(response);
    }
  }

  async CustomerPost(req: Request, res: Response) {
    try {
      const { customername, stockId, orderqty } = req.body;
      const customerData = {
        customername,
        stockId,
        orderqty
      };
      const postCustomer = await stockapprepo.customerPost(customerData);
      response.status = 200;
      response.message = "Customer Posted Successfully";
      response.data = postCustomer;
      res.json(response);
    } catch (error: any) {
      console.log(error);
      response.status = 500;
      response.message = error;
      response.data = null;
      res.json(response);
    }
  }

  async getStocks(req: Request, res: Response) {
    try {
      const stocks = await stockapprepo.getAllStockDetails();
      response.status = 200;
      response.message = "Stocks Fetched Successfully";
      response.data = stocks;
      res.json(response);
    } catch (error: any) {
      console.log(error);
      response.status = 500;
      response.message = error;
      response.data = null;
      res.json(response);
    }
  }

  async updateStocks(req: Request, res: Response) {
    try {
      let id = req?.params?.id
      const { stockname, quantity ,stockordered } = req.body;
      const stockData = {
        stockname,
        quantity,
        stockordered
      };
      const stocks = await stockapprepo.updateStock(id as string,stockData);
      response.status = 200;
      response.message = "Stocks Fetched Successfully";
      response.data = stocks;
      res.json(response);
    } catch (error: any) {
      console.log(error);
      response.status = 500;
      response.message = error;
      response.data = null;
      res.json(response);
    }
  }

  async getCustomers(req: Request, res: Response) {
    try {
      const Customers = await stockapprepo.getAllCustomers();
      response.status = 200;
      response.message = "Customers Fetched Successfully";
      response.data = Customers;
      res.json(response);
    } catch (error: any) {
      console.log(error);
      response.status = 500;
      response.message = error;
      response.data = null;
      res.json(response);
    }
  }

  
  async deleteCustomer(req: Request, res: Response) {
    try {
      let id = req?.params?.id
      const Customers = await stockapprepo.deleteOrder(id as string);
      response.status = 200;
      response.message = "Order Deleted Successfully";
      response.data = Customers;
      res.json(response);
    } catch (error: any) {
      console.log(error);
      response.status = 500;
      response.message = error;
      response.data = null;
      res.json(response);
    }
  }

  async deleteStock(req: Request, res: Response) {
    try {
      let id = req?.params?.id
      console.log('id: ', id);
      const Customers = await stockapprepo.deleteStock(id as string);
      response.status = 200;
      response.message = "Stock Deleted Successfully";
      response.data = Customers;
      res.json(response);
    } catch (error: any) {
      console.log(error);
      response.status = 500;
      response.message = error;
      response.data = null;
      res.json(response);
    }
  }

}

export default new stockController();
