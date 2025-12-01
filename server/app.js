import dotenv from "dotenv";
dotenv.config();

import express from "express";
import { rateLimit } from "express-rate-limit";
import gamesRouter from "./routes/games.js";
import cors from "cors";

const app = express();

const limiter = rateLimit({
  windowMs: 60 * 1000,
  limit: 200,
  message: `Limited to 200 requests/min, try again later`,
  standardHeaders: 'draft-8',
  legacyHeaders: false,
  ipv6Subnet: 56
});

app.use(cors());
app.use(limiter);
app.use(express.json());
app.use('/api', gamesRouter);

app.get('/', (req, res) => res.send("Predict Ball API"));


const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});