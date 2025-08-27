import React from "react";
import { getAirplaneFilter } from "../../lib/data";
import CheckboxAirline from "./checkbox-airline";

export default async function FilterAirline() {
  const airplanes = await getAirplaneFilter();

  return (
    <>
      <div className="flex flex-col gap-4">
        <p className="font-semibold">Airlines</p>
        {airplanes.map((val, i) => (
          <CheckboxAirline key={`${val.id + 1}`} val={val} />
        ))}
      </div>
    </>
  );
}
