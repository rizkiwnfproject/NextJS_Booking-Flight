"use client";

import React, { useMemo } from "react";
import SeatItem from "./seat-item";
import useCheckoutData from "@/hooks/useCheckoutData";
import { FlightSeat } from "@prisma/client";

interface SeatListProps {
  seats: FlightSeat[];
}

export default function SeatList({ seats }: SeatListProps) {
  const checkout = useCheckoutData();

  const { seatA, seatB, seatC, seatD } = useMemo(() => {
    const rawSeats = seats.filter((seat) => seat.type === checkout.data?.seat);
    const seatA = rawSeats.filter((seat) => seat.seatNumber.startsWith("A"));
    const seatB = rawSeats.filter((seat) => seat.seatNumber.startsWith("B"));
    const seatC = rawSeats.filter((seat) => seat.seatNumber.startsWith("C"));
    const seatD = rawSeats.filter((seat) => seat.seatNumber.startsWith("D"));

    return { seatA, seatB, seatC, seatD };
  }, [checkout, seats]);
  return (
    <>
      <form className="flex gap-5 justify-between">
        <div className="flex gap-5">
          <div className="flex flex-col gap-5">
            {seatA.map((seat) =>(
              <SeatItem key={seat.id} seat={seat}/>
            ))}
          </div>
          <div className="flex flex-col gap-5">
            {seatB.map((seat) =>(
              <SeatItem key={seat.id} seat={seat}/>
            ))}
          </div>
        </div>
        <div className="flex gap-5">
          <div className="flex flex-col gap-5">
            {seatC.map((seat) =>(
              <SeatItem key={seat.id} seat={seat}/>
            ))}
          </div>
          <div className="flex flex-col gap-5">
            {seatD.map((seat) =>(
              <SeatItem key={seat.id} seat={seat}/>
            ))}
          </div>
        </div>
      </form>
    </>
  );
}
