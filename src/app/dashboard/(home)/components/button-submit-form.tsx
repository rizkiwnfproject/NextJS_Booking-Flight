import { Button } from "@/components/ui/button";
import { useFormStatus } from "react-dom";

export default function ButtonSubmitForm () {
  const { pending } = useFormStatus();
  return (
    <Button disabled={pending} className="w-full" type="submit">
      {pending ? "Loading..." : "Submit"}
    </Button>
  );
};
