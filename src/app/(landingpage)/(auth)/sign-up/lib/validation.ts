import z from "zod";

export const UserSchema = z.object({
  name: z
    .string()
    .min(4, { message: "Nama harus lebih dari 5 karakter" }),
  email: z
    .string()
    .email({ message: "Email Tidak Valid" }),
  password: z
    .string()
    .min(4, { message: "Password harus lebih dari 5 karakter" }),
  passport: z
    .string()
    .min(4, { message: "Passport harus lebih dari 5 karakter" }),
});
