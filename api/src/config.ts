import { config } from "dotenv";
import { env } from 'node:process'
config();

export const PORT = env.PORT || 5000;
export const MONGODB_URI = env.MONGODB_URI || 'mongodb://localhost/test';