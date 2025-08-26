import { dateFormat } from "@/lib/utils";
import type { Flight } from "@prisma/client";
import { ArrowRight } from "lucide-react";
import React, { type FC } from "react";

interface ColumnRouteFlightProps {
  flight: Flight;
}

const ColumnRouteFlight: FC<ColumnRouteFlightProps> = ({ flight }) => {
  return (
    <div className="flex flex-row gap-5 items-center">
      <div className="text-center">
        <div className="font-bold uppercase">{flight.depatureCityCode}</div>
        <div className="font-medium">
            {flight.depatureCity}
        </div>
        <div className="text-xs text-gray-500">
            {dateFormat(flight.depatureDate)}
        </div>
      </div>
      <ArrowRight className="mx-2 w-4 h-4"/>
      <div className="text-center">
        <div className="font-bold uppercase">{flight.destinationCityCode}</div>
        <div className="font-medium">
            {flight.destinationCity}
        </div>
        <div className="text-xs text-gray-500">
            {dateFormat(flight.arrivalDate)}
        </div>
      </div>
    </div>
  );
};

export default ColumnRouteFlight;
