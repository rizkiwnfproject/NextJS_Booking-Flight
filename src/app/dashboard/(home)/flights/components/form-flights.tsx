"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { CircleHelpIcon } from "lucide-react";
import ButtonSubmitForm from "../../components/button-submit-form";
import type { Airplane, Flight } from "@prisma/client";
import { ActionResult } from "@/app/dashboard/(auth)/sign-in/form/actions";
import { useFormState } from "react-dom";
import { saveFlight, updateFlight } from "../lib/action";
import { dateFormat } from "@/lib/utils";

interface FormFlightsProps {
  airplanes: Airplane[];
  type?: "ADD" | "EDIT";
  defaultValues?: Flight | null;
}

const initialFormState: ActionResult = {
  errorTitle: null,
  errorDesc: [],
};

export default function FormFlight({
  airplanes,
  type,
  defaultValues = null,
}: FormFlightsProps) {
  const updateFlightWithId = (_state: ActionResult, formData: FormData) =>
    updateFlight(null, defaultValues ? defaultValues.id : null, formData);

  const [state, formAction] = useFormState(
    type === "ADD" ? saveFlight : updateFlightWithId,
    initialFormState
  );
  // console.log(defaultValues);

  return (
    <>
      <form action={formAction} className="space-y-6">
        {state?.errorTitle !== null && (
          <div className="bg-red-500 p-4 w-full rounded-lg text-white">
            <div className="font-bold mb-4">{state.errorTitle}</div>
            <ul className="list-disc list-inside ">
              {state.errorDesc?.map((value, index) => (
                <li key={index + value}>{value}</li>
              ))}
            </ul>
          </div>
        )}
        <div className="grid grid-cols-2 gap-4 pl-1">
          <div className="space-y-2">
            <Label htmlFor="planeId">Pilih Pesawat</Label>
            <Select name="planeId" defaultValue={defaultValues?.planeId}>
              <SelectTrigger id="planeId" className="w-full">
                <SelectValue placeholder="Pilih Pesawat" />
              </SelectTrigger>
              <SelectContent>
                {airplanes.map((value, index) => (
                  <SelectItem key={index} value={value.id}>
                    {value.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="">
            <Label htmlFor="price" className="mb-2">
              Harga Tiket
            </Label>
            <Input
              placeholder="Harga Tiket ... "
              type="number"
              name="price"
              id="price"
              min={0}
              className=""
              defaultValue={defaultValues?.price}
              required
            />
            <span className="text-[10px] text-gray-900 flex gap-1 items-center mt-1 ml-1">
              <CircleHelpIcon size={12} />
              Harga Untuk Kelas Business Bertambah 500.000 & Kelas First
              Bertambah 750.000
            </span>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-4 pl-1">
          <div className="">
            <Label htmlFor="depatureCity" className="mb-2">
              Kota Keberangkatan
            </Label>
            <Input
              placeholder="Kota Keberangkatan ... "
              name="depatureCity"
              id="depatureCity"
              min={0}
              className=""
              defaultValue={defaultValues?.depatureCity}
              required
            />
          </div>
          <div className="">
            <Label htmlFor="depatureDate" className="mb-2">
              Waktu Keberangkatan
            </Label>
            <Input
              placeholder="Waktu Keberangkatan ... "
              type="datetime-local"
              name="depatureDate"
              id="depatureDate"
              min={0}
              className="block"
              defaultValue={
                defaultValues?.depatureDate
                  ? dateFormat(defaultValues?.depatureDate, "YYYY-MM-DDTHH:MM")
                  : undefined
              }
              required
            />
          </div>
          <div className="">
            <Label htmlFor="depatureCityCode" className="mb-2">
              Kode Keberangkatan
            </Label>
            <Input
              placeholder="Kode Keberangkatan ... "
              name="depatureCityCode"
              id="depatureCityCode"
              min={0}
              defaultValue={defaultValues?.depatureCityCode}
              required
            />
          </div>
        </div>
        <div className="grid grid-cols-3 gap-4 pl-1">
          <div className="">
            <Label htmlFor="destinationCity" className="mb-2">
              Kota Tujuan
            </Label>
            <Input
              placeholder="Kota Tujuan ... "
              name="destinationCity"
              id="destinationCity"
              min={0}
              className=""
              defaultValue={defaultValues?.destinationCity}
              required
            />
          </div>
          <div className="">
            <Label htmlFor="arrivalDate" className="mb-2">
              Waktu Tiba
            </Label>
            <Input
              placeholder="Waktu Tiba ... "
              type="datetime-local"
              name="arrivalDate"
              id="arrivalDate"
              min={0}
              className="block"
              defaultValue={
                defaultValues?.arrivalDate
                  ? dateFormat(defaultValues?.arrivalDate, "YYYY-MM-DDTHH:MM")
                  : undefined
              }
              required
            />
          </div>
          <div className="">
            <Label htmlFor="destinationCityCode" className="mb-2">
              Kode Kota Tujuan
            </Label>
            <Input
              placeholder="Kode Kota Tujuan ... "
              name="destinationCityCode"
              id="destinationCityCode"
              min={0}
              defaultValue={defaultValues?.destinationCityCode}
              required
            />
          </div>
        </div>
        <ButtonSubmitForm />
      </form>
    </>
  );
}
