import { Button } from "@/components/ui/button";
import { Trash } from "lucide-react";
import React, { type FC } from "react";
import { useFormState, useFormStatus } from "react-dom";
import { deleteAirplane } from "../lib/actions";
import { ActionResult } from "@/app/dashboard/(auth)/sign-in/form/actions";

interface DeleteAirPlaneProps {
  id: string;
}

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button
      size={"sm"}
      disabled={pending}
      type="submit"
      variant={"destructive"}
      className="cursor-pointer"
    >
      <Trash className="mr-2 w-4 h-4" /> {pending ? "Menghapus..." : "Hapus"}
    </Button>
  );
}
const DeleteAirPlane: FC<DeleteAirPlaneProps> = ({ id }) => {
  const initialState: ActionResult = { errorTitle: null, errorDesc: null };

  const [state, formAction] = useFormState(
    deleteAirplane.bind(null, id),
    initialState
  );
  // const DeleteAirPlaneWithId = deleteAirplane.bind(null, id)
  return (
    <>
      <form action={formAction}>
        <SubmitButton />
      </form>
    </>
  );
};

export default DeleteAirPlane;
