import { user } from "../interface/form";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

class userRepo {
    async post(newuser: user) {
        const user = await prisma.user.create(
          { data : newuser }
          );
        return user;
      }
}

export default new userRepo();
