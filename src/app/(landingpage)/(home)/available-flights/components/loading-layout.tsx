import Navbar from "@/app/(landingpage)/components/navbar";
import { Skeleton } from "@/components/ui/skeleton";
import React from "react";
import LoadingFilterAirline from "./loading-filter-airline";
import LoadingListFlight from "./loading-list-flight";

export default function LoadingLayout() {
  return (
    <>
      <section
        id="Header"
        className="bg-[url('/assets/images/background/airplane.png')] bg-no-repeat bg-cover bg-left-top h-[290px] relative"
      >
        <div className="Header-content bg-gradient-to-r from-[#080318] to-[rgba(8,3,24,0)] h-[290px]">
          <Navbar />
          <div className="title container max-w-[1130px] mx-auto flex flex-col gap-1 pt-[50px] pb-[68px]">
            <Skeleton className="w-25 h-5" />
            <Skeleton className="w-50 h-5" />
          </div>
          <div className="w-full h-[15px] bg-gradient-to-t from-[#080318] to-[rgba(8,3,24,0)] absolute bottom-0"></div>
        </div>
      </section>
      <section
        id="Content"
        className="container max-w-[1130px] mx-auto -mt-[33px] z-10 relative pb-[105px]"
      >
        <div className="flex w-full">
          <form className="ticket-filter flex flex-col shrink-0 w-[230px] gap-[30px] text-flysha-off-purple">
            <LoadingFilterAirline />
          </form>
          <LoadingListFlight />
        </div>
      </section>
    </>
  );
}
