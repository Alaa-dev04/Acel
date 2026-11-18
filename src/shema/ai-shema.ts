import { z } from "zod";
export const AIbedShema = z.object({
  Description: z.string().trim(),
  phone: z
    .string()
    .trim()
    .regex(/^01[0125][0-9]{8}$/, "رقم الهاتف غير صحيح"),
  Image: z
    .instanceof(File)
    .refine(
      (file) =>
        [
          "image/png",
          "image/jpeg",
          "image/jpg",
          "image/svg+xml",
          "image/gif",
        ].includes(file.type),
      { message: "Invalid image file type" },
    ),
});
export type AIFormValues = z.infer<typeof AIbedShema>;
