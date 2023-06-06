import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  try {
    await prisma.$connect()
    console.log('MongoDB connected')
  } catch (error : any ) {
    console.error(`Error: ${error.message}`)
  }
}

const db = main();
export default db;
