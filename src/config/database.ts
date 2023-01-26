 import pg from "pg";
 import {PrismaClient} from "@prisma/client"
import dotenv from "dotenv";
dotenv.config();

/* const { Pool } = pg;
const configDatabase = {
  connectionString: process.env.DATABASE_URL
};

const db = new Pool(configDatabase);
 */


const database = new PrismaClient({
  log: ["error", "info", "query", "warn"]
})


export {database}