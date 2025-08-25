import z from "zod";

const ACCEPTED_IMAGE_TYPES = ["image/jpeg", "image/jpg", "image/png"];

const MAX_FILE_SIZE = 2000000; //2mb

export const airplaneFormSchema = z.object({
  name: z
    .string()
    .nonempty({ message: "Nama Tidak Boleh Kosong" })
    .min(4, { message: "Nama Harus Lebih dari 4 Karakter" }),
  code: z
    .string()
    .nonempty({ message: "Kode Tidak Boleh Kosong" })
    .regex(/^[A-z]{3}-[0-9]{3}$/, "Format Kode Harus [XXX-111]"),
  image: z
    .any()
    .refine(
      (file: File) => ACCEPTED_IMAGE_TYPES.includes(file.type),
      "Image Harus Berekstensi jpg, jpeg, dan png"
    )
    .refine(
      (file: File) => file.size <= MAX_FILE_SIZE,
      "Ukuran Image Harus Kurang dari 2mb"
    ),
});
