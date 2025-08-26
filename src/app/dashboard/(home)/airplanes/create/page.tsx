import React, { type FC } from "react";
import FormAirplane from "../components/form-airplane";
import { Metadata } from "next";

// interface CreateAirplanePageProps {}

export const metadata: Metadata = {
  title: "Create | Airplane",
};

const CreateAirplanePage: FC = ({}) => {
  return (
    <>
      <div className="">
        <div className="flex flex-row items-center justify-between">
          <div className="my-5 text-2xl font-bold">Tambah Data Airplane</div>
        </div>
        <FormAirplane type="ADD"/>
      </div>
    </>
  );
};
export default CreateAirplanePage;
