import React, { type FC } from "react";
import FormAirplane from "../../components/form-airplane";
import { getAirplaneById } from "../../lib/actions";

type Params = {
  id: string;
};

interface EditAirplanePageProps {
  params: Params
}

const EditAirplanePage: FC<EditAirplanePageProps> = async ({params}) => {
   const data = await getAirplaneById(params.id)
  return (
    <>
      <div className="">
        <div className="flex flex-row items-center justify-between">
          <div className="my-5 text-2xl font-bold">Edit Data Airplane</div>
        </div>
        <FormAirplane type="EDIT" defaultValues={data}/>
      </div>
    </>
  );
};
export default EditAirplanePage;
