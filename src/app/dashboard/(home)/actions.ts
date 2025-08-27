"use server";

import { getUser, lucia } from "@/lib/auth";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function logout(): Promise<void> {
  const { session } = await getUser();

  if (!session) {
    // return {
    //   errorTitle: "title",
    //   errorDesc: ["unauthorized"],
    // };
    console.log("unauthorized");
    return redirect("/dashboard/sign-in");
  }

  await lucia.invalidateSession(session.id);

  const sessionCookie = lucia.createBlankSessionCookie();

  (await cookies()).set(
    sessionCookie.name,
    sessionCookie.value,
    sessionCookie.attributes
  );

  return redirect("/dashboard/sign-in");
}
