import z from "zod";

export const formSchema = z.object({
  email: z
    .string()
    .min(1, { message: "Email Harus Diisi" })
    .email("Format email tidak valid"),
  password: z.string().min(6, { message: "Password minimal 6 karakter" }),
});
