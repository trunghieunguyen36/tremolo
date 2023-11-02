import * as express from "express";
import { createReservation } from "../controllers/reservation.controller";

const reservationRouter = express.Router();

reservationRouter.post("/reservations", createReservation);

export default reservationRouter;
