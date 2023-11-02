import * as express from "express";
import { Request, Response } from "express";
import * as cors from "cors";
import rateLimit from "express-rate-limit";
import helmet from "helmet";
const xss = require("xss-clean");

import reservationRouter from "./routes/reservation.route";
import { mySQLDataSource } from "./app-data-source";

mySQLDataSource
  .initialize()
  .then(() => {
    console.log("Data source is ready!");
  })
  .catch((err) => {
    console.log("Data source error", err);
  });

const app = express();

// Set security HTTP headers
app.use(helmet());

// Limit requests
const limiter = rateLimit({
  max: 100,
  windowMs: 60 * 60 * 1000,
  message: "Too many requests from this IP, please try again in an hour!",
});

app.use(limiter);

app.use(cors<Request>());
app.use(express.json());

// Data sanitization to preventing XSS
app.use(xss());

app.use("/api", reservationRouter);

app.listen(3000);
