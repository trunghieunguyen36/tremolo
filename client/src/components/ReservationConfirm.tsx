import { FunctionComponent } from "react";

import {
  CalendarOutlined,
  ClockCircleOutlined,
  TeamOutlined,
  UserOutlined,
  PhoneOutlined,
} from "@ant-design/icons";
import { Typography, Flex, Button } from "antd";

import { Reservation } from "../App";
import { formatDate, formatTime } from "../utils";

type ReservationConfirmProps = {
  reservationData: Reservation;
  setType: (type: string) => void;
};

const ReservationConfirm: FunctionComponent<ReservationConfirmProps> = ({
  reservationData: { date, time, numberOfPeople, name, phoneNumber },
  setType,
}) => {
  const formattedDate = formatDate(date);
  const formattedTime = formatTime(time);

  return (
    <Flex gap="middle" vertical>
      <Typography.Title className="reservation-title">
        Reservation Details
      </Typography.Title>

      <Typography>
        <CalendarOutlined /> {`Date: ${formattedDate}`}
      </Typography>

      <Typography>
        <ClockCircleOutlined /> {`Time: ${formattedTime}`}
      </Typography>

      <Typography>
        {" "}
        <TeamOutlined /> {`Number of People: ${numberOfPeople}`}
      </Typography>

      <Typography>
        {" "}
        <UserOutlined /> {`Name: ${name}`}
      </Typography>

      <Typography>
        {" "}
        <PhoneOutlined /> {`Phone: ${phoneNumber}`}
      </Typography>

      <Button type="primary" onClick={() => setType("form")}>
        + New Reservation
      </Button>
    </Flex>
  );
};

export default ReservationConfirm;
