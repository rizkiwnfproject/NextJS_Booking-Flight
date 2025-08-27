import { Skeleton } from "@/components/ui/skeleton";
import React from "react";
import LoadingFlightItem from "./loading-flight-item";

export default function LoadingListFlight() {
  return (
    <>
      <div className="flex flex-col gap-6 w-full">
        <LoadingFlightItem />
        <LoadingFlightItem />
        <LoadingFlightItem />
      </div>
    </>
  );
}
