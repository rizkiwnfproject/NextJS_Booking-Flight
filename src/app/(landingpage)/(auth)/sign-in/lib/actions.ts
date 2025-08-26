"use server";

import { ActionResult } from "@/app/dashboard/(auth)/sign-in/form/actions";
import bcrypt from "bcrypt";
import prisma from "../../../../../../lib/prisma";
import { redirect } from "next/navigation";
import { UserSchema } from "../../sign-up/lib/validation";
import { lucia } from "@/lib/auth";
import { cookies } from "next/headers";

export async function signInUser(
  prevState: unknown,
  formData: FormData
): Promise<ActionResult> {
  const signInSchema = UserSchema.pick({ email: true, password: true });

  const validate = signInSchema.safeParse({
    email: formData.get("email"),
    password: formData.get("password"),
  });
  if (!validate.success) {
    const errorDesc = validate.error.issues.map((issue) => issue.message);
    return {
      errorTitle: "Error Validation",
      errorDesc,
    };
  }

  const existingUser = await prisma.user.findFirst({
    where: {
      email: validate.data.email,
    },
  });

  if (!existingUser) {
    return {
      errorTitle: "Error",
      errorDesc: ["Email Tidak Ditemukan"],
    };
  }
  const validPassword = await bcrypt.compare(
    validate.data.password,
    existingUser.password
  );

  if (!validPassword) {
    return {
      errorTitle: "Error",
      errorDesc: ["Email/Password Salah"],
    };
  }
  const session = await lucia.createSession(existingUser.id, {});
  const sessionCookie = await lucia.createSessionCookie(session.id);

  (await cookies()).set(
    sessionCookie.name,
    sessionCookie.value,
    sessionCookie.attributes
  );
  return redirect("/");
}
