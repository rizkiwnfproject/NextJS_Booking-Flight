"use client";

import type { ActionResult } from "@/app/dashboard/(auth)/sign-in/form/actions";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React, { useActionState, type FC } from "react";
import { useFormStatus } from "react-dom";
import { saveAirplane, updateAirplane } from "../lib/actions";
import type { Airplane } from "@prisma/client";

interface FormAirplaneProps {
  type?: "ADD" | "EDIT";
  defaultValues?: Airplane | null;
}

const initialFormState: ActionResult = {
  errorTitle: null,
  errorDesc: [],
};

const SubmitButton = () => {
  const { pending } = useFormStatus();
  return (
    <Button disabled={pending} className="w-full" type="submit">
      {pending ? "Loading..." : "Submit"}
    </Button>
  );
};

const FormAirplane: FC<FormAirplaneProps> = ({ type, defaultValues }) => {
  const updateAirplaneWithId = (_state: ActionResult, formData: FormData) =>
    updateAirplane(null, defaultValues?.id!!, formData);
  const [state, formAction] = useActionState(
    type === "ADD" ? saveAirplane : updateAirplaneWithId,
    initialFormState
  );

  return (
    <>
      <form action={formAction} className="w-[40%] space-y-4 pl-1">
        {state.errorTitle !== null && (
          <div className="bg-red-500 p-4 w-full rounded-lg text-white">
            <div className="font-bold mb-4">{state.errorTitle}</div>
            <ul className="list-disc list-inside ">
              {state.errorDesc?.map((value, index) => (
                <li key={index + value}>{value}</li>
              ))}
            </ul>
          </div>
        )}
        <div className="space-y-2">
          <Label htmlFor="code">Kode Pesawat</Label>
          <Input
            placeholder="Kode Pesawat ... "
            name="code"
            id="code"
            defaultValue={defaultValues?.code}
            required
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="name">Nama Pesawat</Label>
          <Input
            placeholder="Nama Pesawat ... "
            name="name"
            id="name"
            defaultValue={defaultValues?.name}
            required
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="image">Upload Foto</Label>
          <Input
            type="file"
            placeholder="Upload Foto ... "
            name="image"
            id="image"
            // defaultValue={defaultValues?.image}
          />
        </div>
        <SubmitButton />
      </form>
    </>
  );
};

export default FormAirplane;
