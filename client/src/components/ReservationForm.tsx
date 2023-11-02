import { FunctionComponent } from "react";

import {
  DatePicker,
  TimePicker,
  Input,
  InputNumber,
  Button,
  Form,
  Typography,
} from "antd";

import { Reservation } from "../App";

type ReservationFormProps = {
  isLoading: boolean;
  onSubmit: (values: Reservation) => void;
};

const ReservationForm: FunctionComponent<ReservationFormProps> = ({
  isLoading,
  onSubmit,
}) => {
  return (
    <>
      <div className="reservation-title">
        <Typography.Title>Reservation</Typography.Title>
        <Typography>
          Please fill in the details below to make a reservation
        </Typography>
      </div>

      <Form name="basic" layout="vertical" onFinish={onSubmit}>
        <Form.Item<Reservation>
          label="Date"
          name="date"
          rules={[{ required: true, message: "Please choose the date!" }]}
        >
          <DatePicker
            format="DD/MM/YYYY"
            className="reservation-form__field--fullwidth"
          />
        </Form.Item>

        <Form.Item<Reservation>
          label="Time"
          name="time"
          rules={[{ required: true, message: "Please choose the time!" }]}
        >
          <TimePicker
            className="reservation-form__field--fullwidth"
            format="HH:mm"
          />
        </Form.Item>

        <Form.Item<Reservation>
          label="Number of people"
          name="numberOfPeople"
          rules={[
            { required: true, message: "Please input the number of people!" },
          ]}
        >
          <InputNumber className="reservation-form__field--fullwidth" />
        </Form.Item>

        <Form.Item<Reservation>
          label="Name"
          name="name"
          rules={[{ required: true, message: "Please input your name!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item<Reservation>
          label="Phone Number"
          name="phoneNumber"
          rules={[
            {
              required: true,
              message: "Please input your phone number!",
              pattern: /(84|0[3|5|7|8|9])+([0-9]{8})\b/g, // vietnamese phone number
            },
          ]}
        >
          <Input placeholder="Ex: 0348584921" />
        </Form.Item>

        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            loading={isLoading}
            className="reservation-form__field--fullwidth"
          >
            Submit
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default ReservationForm;
