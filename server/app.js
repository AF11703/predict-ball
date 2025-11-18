import dotenv from "dotenv";
dotenv.config();

import express from "express";
import { rateLimit } from "express-rate-limit";
import gamesRouter from "./routes/games.js";
import cors from "cors";

const app = express();



const limiter = rateLimit({
  windowMs: 60 * 1000,
  limit: 20,
  message: `Limited to 20 requests/min, try again later`,
  standardHeaders: 'draft-8',
  legacyHeaders: false,
  ipv6Subnet: 56
});

app.use(cors());
app.use(limiter);
app.use(express.json());
app.use('/api', gamesRouter);

app.listen(3000, () => {
  console.log(`Server listening on port 3000`);
});