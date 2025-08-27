import React from "react";
import { Skeleton } from "@/components/ui/skeleton";

export default function LoadingSeatList() {
  return (
    <form className="flex gap-5 justify-between">
      <div className="flex gap-5">
        <div className="flex flex-col gap-5">
          {[0, 1, 2, 3, 4].map((val) => (
            <Skeleton key={val} className="w-12 h-12 rounded-xl" />
          ))}
        </div>
        <div className="flex flex-col gap-5">
          {[0, 1, 2, 3, 4].map((val) => (
            <Skeleton key={val} className="w-12 h-12 rounded-xl" />
          ))}
        </div>
      </div>
      <div className="flex gap-5">
        <div className="flex flex-col gap-5">
          {[0, 1, 2, 3, 4].map((val) => (
            <Skeleton key={val} className="w-12 h-12 rounded-xl" />
          ))}
        </div>
        <div className="flex flex-col gap-5">
          {[0, 1, 2, 3, 4].map((val) => (
            <Skeleton key={val} className="w-12 h-12 rounded-xl" />
          ))}
        </div>
      </div>
    </form>
  );
}
