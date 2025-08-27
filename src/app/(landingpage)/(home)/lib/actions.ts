"use server";

import { getUser, lucia } from "@/lib/auth";
import { objectToParams } from "@/lib/utils";
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function logout(): Promise<{ error: string } | null> {
  const { session, user } = await getUser();

  if (!session) {
    return {
      error: "UnAuthorized",
    };
  }
  await lucia.invalidateSession(session.id);
  const sessionCookie = lucia.createBlankSessionCookie();
  (await cookies()).set(
    sessionCookie.name,
    sessionCookie.value,
    sessionCookie.attributes
  );
  revalidatePath("/");
  redirect("/");
}

export async function searchFlight(formData: FormData) {
  const searchData = {
    depature: formData.get("depature"),
    arrival: formData.get("arrival"),
    date: formData.get("date"),
  };

  const queryParams = objectToParams(searchData)

  return redirect(`/available-flights?${queryParams}`)
}
