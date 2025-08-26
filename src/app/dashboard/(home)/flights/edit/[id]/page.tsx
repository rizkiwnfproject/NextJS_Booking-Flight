import { Metadata } from "next";
import React, { type FC } from "react";
import { getAirplanes } from "../../../airplanes/lib/data";
import FormFlight from "../../components/form-flights";
import { getFlightById } from "../../lib/data";

type Params = {
  id: string;
};

interface EditFlightPageProps {
  params: Params;
}

export const metadata: Metadata = {
  title: "Edit | Flights",
};

const EditFlightPage: FC<EditFlightPageProps> = async ({ params }) => {
  const airplane = await getAirplanes();
  const flights = await getFlightById(params.id); 

  return (
    <>
      <div className="">
        <div className="flex flex-row items-center justify-between">
          <div className="my-5 text-2xl font-bold">Edit Data Penerbangan</div>
        </div>
        <FormFlight airplanes={airplane} type="EDIT" defaultValues={flights} />
      </div>
    </>
  );
};
export default EditFlightPage;
