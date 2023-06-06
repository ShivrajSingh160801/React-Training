import { userSignin, userSignup } from "../interface/appInterface";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
let bcrypt = require("bcrypt");

class userRepo {
  async post(newUser: userSignup) {
    newUser.password = bcrypt.hashSync(newUser.password, 12);
    const user = await prisma.users.create({ data: newUser });
    return user;
  }

  async signin(checkUser: userSignin) {
    const check = await prisma.users.findUnique({
      where: { email: checkUser.email },
    });
    return check;
  }
}

export default new userRepo();
