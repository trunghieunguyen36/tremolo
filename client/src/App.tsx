import { useState } from "react";
import axios from "axios";
import dayjs from "dayjs";

import ReservationForm from "./components/ReservationForm";
import ReservationConfirm from "./components/ReservationConfirm";

import "./App.css";

export type Reservation = {
  name: string;
  phoneNumber: string;
  numberOfPeople: number;
  date: string;
  time: string;
};

const serverUrl = import.meta.env.VITE_SERVER_URL;

const App = () => {
  const [reservationData, setReservationData] = useState<Reservation>(
    {} as Reservation
  );
  const [type, setType] = useState<string>("form");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleSubmit = ({
    date,
    time,
    numberOfPeople,
    name,
    phoneNumber,
  }: Reservation) => {
    setIsLoading(true);

    const formattedDate = dayjs(date).format("YYYY-MM-DD");
    const formattedTime = dayjs(time).format("HH:mm");

    const formattedReservation = {
      date: formattedDate,
      time: formattedTime,
      numberOfPeople,
      name,
      phoneNumber,
    };

    axios
      .post(`${serverUrl}/api/reservations`, formattedReservation)
      .then((response) => {
        console.log();
        setReservationData(response.data.data);
        setType("confirm");
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Failed to save date: ", error);
      });
  };

  return (
    <div className="reservation-wrapper">
      {type === "form" && (
        <ReservationForm isLoading={isLoading} onSubmit={handleSubmit} />
      )}

      {type === "confirm" && (
        <ReservationConfirm
          reservationData={reservationData}
          setType={setType}
        />
      )}
    </div>
  );
};

export default App;
