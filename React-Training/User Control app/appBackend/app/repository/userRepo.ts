import { userSignin, userSignup, supplier } from "../interface/appInterface";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
let bcrypt = require("bcrypt");

class userRepo {
  async post(newUser: userSignup) {
    newUser.password = bcrypt.hashSync(newUser.password, 12);
    const user = await prisma.users.create({ data: newUser });
    return user;
  }

  async putUser(id: string, newUser: any) {
    const updateUser = await prisma.users.update({
      where: {
        id: id,
      },
      data: newUser,
    });
    return updateUser;
  }

  async postSupplier(newSupplier: supplier) {
    console.log("newSupplier: ", newSupplier);
    const Supplieries = await prisma.supplier.create({ data: newSupplier });
    return Supplieries;
  }

  async postTables(newTable: any) {
    const TableEntry = await prisma.tabledata.create({ data: newTable });
    return TableEntry;
  }

  async updateTables(date: string, TableData: any) {
    console.log('I am Update ');
    const UpdatedTable = await prisma.tabledata.update({
      where: {
        date: date,
      },
      data: TableData,
    });
    return UpdatedTable;
  }

  async getTable(date: string) {
    console.log("repo date: ", typeof date);
    const Supplier = await prisma.tabledata.findUnique({
      where: {
        date: date,
      },
    });
    return Supplier;
  }

  async getSupplier() {
    const Supplier = await prisma.supplier.findMany();
    return Supplier;
  }

  async signin(checkUser: userSignin) {
    const check = await prisma.users.findUnique({
      where: { email: checkUser.email },
    });
    return check;
  }
}

export default new userRepo();
