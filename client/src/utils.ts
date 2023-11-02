import dayjs from "dayjs";

export const formatDate = (date: string) => {
  const formattedDate = dayjs(date).format("MMM DD, YYYY");
  return formattedDate;
};

export const formatTime = (time: string) => {
  const [hours, minutes] = time.split(":");

  const isPM = parseInt(hours) >= 12;

  const formattedHours = isPM ? parseInt(hours) - 12 : hours;

  const formattedTime = `${formattedHours}:${minutes} ${isPM ? "PM" : "AM"}`;

  return formattedTime;
};
