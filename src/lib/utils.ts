import { FlightSeat, TypeSeat } from "@prisma/client";
import { clsx, type ClassValue } from "clsx";
import dayjs from "dayjs";
import { twMerge } from "tailwind-merge";

export const CHECKOUT_KEY = 'CHECKOUT_KEY'

export const SEAT_VALUES = {
  ECONOMY: {
    label: "Economy",
    additionalPrice: 1,
  },
  BUSINESS: {
    label: "Business",
    additionalPrice: 1.5,
  },
  FIRST: {
    label: "First",
    additionalPrice: 2,
  },
};
export type SeatValuesType = keyof typeof SEAT_VALUES;

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const generateSeatPerClass = (flightId: string) => {
  const SEAT_CLASS: TypeSeat[] = ["ECONOMY", "BUSINESS", "FIRST"];
  const SEAT_CODE = ["A", "B", "C", "D"];

  const seats: { seatNumber: string; type: TypeSeat; flightId: string }[] = [];

  for (const className of SEAT_CLASS) {
    for (const seat of SEAT_CODE) {
      for (let i = 1; i <= 5; i++) {
        seats.push({
          seatNumber: seat + i,
          type: className as TypeSeat,
          flightId,
        });
      }
    }
  }
  return seats;
};

export const dateFormat = (
  date: Date | string,
  format = "DD MM YYYY HH:mm"
) => {
  if (!date) {
    return "";
  }

  const dateFormat = dayjs(date).format(format);
  return dateFormat;
};

export const rupiahFormat = (value: number) => {
  return Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
  }).format(value);
};

export const objectToParams = (obj: { [key: string]: unknown }) => {
  const queryParams = Object.keys(obj)
    .map((key) => {
      if (obj[key] !== null) {
        return `${key}=${obj[key]}`;
      }
      return "";
    })
    .filter((key) => key !== "")
    .join("&");
  return queryParams;
};

export const availableSeats = (seats: FlightSeat[]) => {
  const totalSeatEconomy = seats.filter(
    (item) => item.type === "ECONOMY"
  ).length;
  const totalSeatBusiness = seats.filter(
    (item) => item.type === "BUSINESS"
  ).length;
  const totalSeatFirst = seats.filter((item) => item.type === "FIRST").length;

  const economyBooked = seats.filter(
    (item) => item.type === "ECONOMY" && item.isBooked
  ).length;
  const businessBooked = seats.filter(
    (item) => item.type === "BUSINESS" && item.isBooked
  ).length;
  const firstBooked = seats.filter(
    (item) => item.type === "FIRST" && item.isBooked
  ).length;

  return {
    economyBooked,
    businessBooked,
    firstBooked,

    totalSeatEconomy,
    totalSeatBusiness,
    totalSeatFirst,
  };
};
