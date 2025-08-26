import { Metadata } from "next";
import React, { type FC } from "react";
import FormFlight from "../components/form-flights";
import { getAirplanes } from "../../airplanes/lib/data";

// interface CreateFlightPageProps {}

export const metadata: Metadata = {
  title: "Create | Flights",
};

const CreateFlightPage: FC = async ({}) => {
  const airplane = await getAirplanes();

  return (
    <>
      <div className="">
        <div className="flex flex-row items-center justify-between">
          <div className="my-5 text-2xl font-bold">Tambah Data Penerbangan</div>
        </div>
        <FormFlight airplanes={airplane} type="ADD" />
      </div>
    </>
  );
};
export default CreateFlightPage;
