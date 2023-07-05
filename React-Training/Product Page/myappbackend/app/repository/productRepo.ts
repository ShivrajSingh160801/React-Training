import { category, product } from "../interface/productI";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

class productRepo {
  async post(newproduct: product) {
    const product = await prisma.product.create({ data: newproduct });
    return product;
  }

  async Categorypost(newCategory: category) {
    const Category = await prisma.category.create({ data: newCategory });
    return Category;
  }

  async getCategory() {
    const Categories = await prisma.category.findMany();
    return Categories;
  }

  async getProduct() {
    const Products = await prisma.product.findMany();
    return Products;
  }

  async getProductWithParams(
    searchValue: string,
    sortOrder: any,
    pageNumber: string
  ) {
    const Products = await prisma.product.findMany({
      where: {
        title: {
          contains: searchValue,
          mode: "insensitive",
        },
      },
      orderBy: {
        title: sortOrder,
      },
    });
    return Products;
  }
}

export default new productRepo();
