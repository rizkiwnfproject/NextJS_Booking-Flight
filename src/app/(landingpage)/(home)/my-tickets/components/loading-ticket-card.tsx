/* eslint-disable @next/next/no-img-element */
import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

export default function LoadingTicketCard() {
  return (
    <>
      <div className="ticket-card flex justify-between items-center rounded-[20px] p-5 bg-flysha-bg-purple">
        <div className="flex gap-[16px] items-center">
          <div className="flex shrink-0 w-[90px] h-[70px] rounded-[14px] overflow-hidden">
            <Skeleton className="w-[90px] h-[70px] rounded-md" />
          </div>
          <div className="flex flex-col justify-center-center gap-[2px]">
            <Skeleton className="w-24 h-5 rounded-lg" />
            <Skeleton className="w-24 h-5 rounded-lg" />
          </div>
        </div>
        <Skeleton className="w-28 h-5" />
        <div className="flex items-center gap-[30px]">
          <div className="flex flex-col gap-[2px] text-center">
            <Skeleton className="w-12 h-5 rounded-lg" />
            <Skeleton className="w-12 h-5 rounded-lg" />
          </div>
          <img src="../assets/images/icons/plane-dotted.svg" alt="icon" />
          <div className="flex flex-col gap-[2px] text-center">
            <Skeleton className="w-12 h-5 rounded-lg" />
            <Skeleton className="w-12 h-5 rounded-lg" />
          </div>
        </div>
        <Skeleton className="h-12 w-30 rounded-full"/>
      </div>
    </>
  );
}
