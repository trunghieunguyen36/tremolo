import { Request, Response, NextFunction } from "express";
import { CatchAsyncError } from "../middleware/catchAsyncError";
import ErrorHandler from "../utils/ErrorHandler";

import { Reservation } from "../entity/reservation.entity";
import { mySQLDataSource } from "../app-data-source";

interface IReservation {
  name: string;
  phoneNumber: string;
  numberOfPeople: number;
  date: string;
  time: string;
}

export const createReservation = CatchAsyncError(
  async (req: Request, res: Response, next: NextFunction) => {
    const { name, phoneNumber, numberOfPeople, date, time }: IReservation =
      req.body;

    const newReservation: IReservation = {
      name,
      phoneNumber,
      numberOfPeople,
      date,
      time,
    };

    try {
      const reservation = await mySQLDataSource
        .getRepository(Reservation)
        .create(newReservation);

      const { date, time, numberOfPeople, name, phoneNumber } =
        await mySQLDataSource.getRepository(Reservation).save(reservation);

      const data: IReservation = {
        date,
        time,
        numberOfPeople,
        name,
        phoneNumber,
      };

      return res.status(200).json({ success: true, data });
    } catch (error: any) {
      return next(new ErrorHandler(error.message, 500));
    }
  }
);
