import React, { useMemo, type FC } from "react";
import type { FlightColumn } from "./column-flights";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { availableSeats, rupiahFormat } from "@/lib/utils";

interface ColumnSeatPriceProps {
  flight: FlightColumn;
}

const ColumnSeatPrice: FC<ColumnSeatPriceProps> = ({ flight }) => {
  const {
    economyBooked,
    businessBooked,
    firstBooked,
    totalSeatEconomy,
    totalSeatBusiness,
    totalSeatFirst,
  } = useMemo(() => availableSeats(flight.seat), [flight]);
  return (
    <>
      <div className="w-[250px]">
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger>Economy</AccordionTrigger>
            <AccordionContent>
              <div className="space-y-2">
                <div className="font-medium">
                  <span className="text-primary">Harga tiket : </span>{" "}
                  {rupiahFormat(flight.price)}
                </div>
                <div className="font-medium">
                  <span className="text-primary">Kursi sold-out: </span>{" "} {economyBooked}
                </div>
                <div className="font-medium">
                  <span className="text-primary">Sisa kursi : </span>{" "}
                  {totalSeatEconomy - economyBooked} dari {totalSeatEconomy}
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>Business</AccordionTrigger>
            <AccordionContent>
              <div className="space-y-2">
                <div className="font-medium">
                  <span className="text-primary">Harga tiket : </span>{" "}
                  {rupiahFormat(flight.price * 1.5)}
                </div>
                <div className="font-medium">
                  <span className="text-primary">Kursi sold-out: </span>{" "} {businessBooked}
                </div>
                <div className="font-medium">
                  <span className="text-primary">Sisa kursi : </span>{" "}
                  {totalSeatBusiness - businessBooked} dari {totalSeatBusiness}
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>First</AccordionTrigger>
            <AccordionContent>
              <div className="space-y-2">
                <div className="font-medium">
                  <span className="text-primary">Harga tiket : </span>{" "}
                  {rupiahFormat(flight.price * 2.5)}
                </div>
                <div className="font-medium">
                  <span className="text-primary">Kursi sold-out: </span>{" "} {firstBooked}
                </div>
                <div className="font-medium">
                  <span className="text-primary">Sisa kursi : </span>{" "}
                  {totalSeatFirst - firstBooked} dari {totalSeatFirst}
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </>
  );
};

export default ColumnSeatPrice;
