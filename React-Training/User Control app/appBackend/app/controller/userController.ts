import { Request, Response } from "express";
import userRepo from "../repository/userRepo";
import { responsemodel } from "../model/responsemodel";
import jwt from "jsonwebtoken";
let bcrypt = require("bcrypt");
let response = new responsemodel();

class userController {
  async post(req: Request, res: Response) {
    try {
      let { name, password, email, phone } = req.body;
      let userData = {
        name,
        password,
        email,
        phone,
      };
      const user = await userRepo.post(userData);
      response.status = 200;
      response.message = "Data Created Successfull";
      response.data = { user };
      res.json(response);
    } catch (error: any) {
      response.status = 500;
      response.message = error;
      response.data = null;
      res.json(response);
    }
  }

  async updateUser(req: Request, res: Response) {
    try {
      const id = req.query.id?.toString();
      let { name, phone } = req.body;
      let userData = {
        name,
        phone
      };
      const user = await userRepo.putUser(id as string, userData);
      response.status = 200;
      response.message = "Data Updated Successfull";
      response.data = { user };
      res.json(response);
    } catch (error: any) {
      response.status = 500;
      response.message = error;
      response.data = null;
      res.json(response);
    }
  }

  async loginCheck(req: Request, res: Response) {
    try {
      const { email, password } = req.body;
      const GetUser = await userRepo.signin({ email, password });
      if (!GetUser) {
        return res.status(404).json({ message: "User not found" });
      }
      const isMatched = await bcrypt.compare(password, GetUser.password);

      if (!isMatched) {
        return res.status(401).json({ message: "Invalid credentials" });
      }

      const token = jwt.sign(
        { email: GetUser.email },
        process.env.ACCESS_KEY as string,
        {
          expiresIn: "3h",
        }
      );

      return res
        .status(200)
        .json({ message: "Logged in successfully", data: { token, GetUser } });
    } catch (error: any) {
      return res.status(500).json({ message: "Something went wrong", error });
    }
  }

  async postSupplier(req: Request, res: Response) {
    console.log("req: ", req.body);
    try {
      let supplierData = req.body;
      const Supplier = await userRepo.postSupplier(supplierData);
      response.status = 200;
      response.message = "Data Created Successfull";
      response.data = { Supplier };
      res.json(response);
    } catch (error: any) {
      console.log("error: ", error);
      response.status = 500;
      response.message = error;
      response.data = null;
      res.json(response);
    }
  }

  async postTableEntry(req: Request, res: Response) {
    try {
      let TableEntryData = req.body;
      console.log('TableEntryData: ', TableEntryData);
      const Tabledate = req.query.date?.toString();
      console.log('Tabledate: ', Tabledate);

      const GetTableEntry = await userRepo.getTable(Tabledate as string);
      console.log('GetTableEntry: ', GetTableEntry);
      
      if (GetTableEntry) {
        // Date exists, call updateTableEntry function
        const TableEntry = await userRepo.updateTables(Tabledate as string, TableEntryData);
        const response = {
          status: 200,
          message: "Data updated Successfully",
          data: { TableEntry },
        };
        res.json(response);
      } else {
        // Date does not exist, call postTables function
        const TableEntry = await userRepo.postTables(TableEntryData);
        const response = {
          status: 200,
          message: "Data Created Successfully",
          data: { TableEntry },
        };
        res.json(response);
      }
    } catch (error: any) {
      console.log("error: ", error);
      const response = {
        status: 500,
        message: error,
        data: null,
      };
      res.json(response);
    }
  }
  

  async getTableEntry(req: Request, res: Response) {
    try {
      const Tabledate = req.query.date?.toString();
      console.log("Tabledate: ", Tabledate);
      const TableEntry = await userRepo.getTable(Tabledate as string);
      const response = {
        status: 200,
        message: "Data Fetched Successfully",
        data: { TableEntry },
      };
      res.json(response);
    } catch (error: any) {
      console.log("error: ", error);
      const response = {
        status: 500,
        message: error,
        data: null,
      };
      res.json(response);
    }
  }

  async updateTableEntry(req: Request, res: Response) {
    try {
      const Tabledate = req.query.date?.toString();
      const TableData = req.body;
      const TableEntry = await userRepo.updateTables(
        Tabledate as string,
        TableData
      );
      console.log("TableEntry: ", TableEntry);
      const response = {
        status: 200,
        message: "Data updated Successfully",
        data: { TableEntry },
      };
      res.json(response);
    } catch (error: any) {
      console.log("error: ", error);
      const response = {
        status: 500,
        message: error,
        data: null,
      };
      res.json(response);
    }
  }

  async getSupllier(req: Request, res: Response) {
    try {
      const Suppliers = await userRepo.getSupplier();
      response.status = 200;
      response.message = "Data Created Successfull";
      response.data = { Suppliers };
      res.json(response);
    } catch (error: any) {
      response.status = 500;
      response.message = error;
      response.data = null;
      res.json(response);
    }
  }
}
export default new userController();
