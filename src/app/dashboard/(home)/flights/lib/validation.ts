import z from "zod";

export const formFlightSchema = z.object({
  planeId: z.string().nonempty({ message: "Pesawat Tidak Boleh Kosong" }),
  price: z.string().nonempty({ message: "Harga Tiket Tidak Boleh Kosong" }),
  depatureCity: z
    .string()
    .nonempty({ message: "Kota Keberangkatan Tidak Boleh Kosong" }),
  depatureDate: z.date(),
  depatureCityCode: z
    .string()
    .nonempty({ message: "Kode Kota Keberangkatan Tidak Boleh Kosong" })
    .min(3, {
      message:
        "Kode Kota Keberangkatan Harus Memiliki Panjang Minimal 3 Karakter",
    })
    .max(3, {
      message:
        "Kode Kota Keberangkatan Harus Memiliki Panjang Maksimal 3 Karakter",
    }),
  destinationCity: z
    .string()
    .nonempty({ message: "Kota Tujuan Tidak Boleh Kosong" }),
  arrivalDate: z.date(),
  destinationCityCode: z
    .string()
    .nonempty({ message: "Kode Kota Tujuan Tidak Boleh Kosong" })
    .min(3, {
      message:
        "Kode Kota Tujuan Harus Memiliki Panjang Minimal 3 Karakter",
    })
    .max(3, {
      message:
        "Kode Kota Tujuan Harus Memiliki Panjang Maksimal 3 Karakter",
    }),
});
