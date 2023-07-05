import { stock, customer } from "../interface/stockI_customerI";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

class stockappRepo {
  async stockPost(stockData: stock) {
    const newStock = await prisma.stock.create({
      data: stockData,
    });
    return newStock;
  }

  async customerPost(customerData: customer) {
    const newCustomer = await prisma.customer.create({
      data: customerData,
    });
    return newCustomer;
  }

  async getAllStockDetails() {
    const Stocks = await prisma.stock.findMany();
    return Stocks;
  }

  async updateStock(id: string, stockData: stock) {
    const updatedStock = await prisma.stock.update({
      where: { id: id },
      data: stockData,
    });
    return updatedStock;
  }

  async deleteStock(id: string) {
    const deleteStock = await prisma.stock.delete({
      where: { id: id },
    });
    return deleteStock;
  }

  async deleteOrder(id: string) {
    const deleteOrder = await prisma.customer.delete({
      where: { id: id },
    });
    return deleteOrder;
  }

  async getAllCustomers() {
    const customers = await prisma.customer.findMany({
      select: {
        id: true,
        customername: true,
        stockId: true,
        stock: {
          select: {
            stockname: true,
          },
        },
        orderqty: true,
      },
    });
    return customers;
  }
}

export default new stockappRepo();
