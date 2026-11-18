import { z } from "zod";
const MAX_SIZE = 5 * 1024 * 1024; // 5MB
const ACCEPTED = ["image/png", "image/jpeg", "image/webp"];
export const AIbedShema = z.object({
  Description: z.string().trim(),
  phone: z
    .string()
    .trim()
    .regex(/^01[0125][0-9]{8}$/, "رقم الهاتف غير صحيح"),
  Image: z
    .custom<FileList>(
      (value) => typeof FileList !== "undefined" && value instanceof FileList,
      "Please select a valid file",
    )
    .refine((list) => list.length > 0, "Select at least one file")
    .refine((list) => list.length <= 1, "Max 1 file")
    .refine(
      (list) => Array.from(list).every((f) => f.size <= MAX_SIZE),
      "Each file must be under 5MB",
    )
    .refine(
      (list) => Array.from(list).every((f) => ACCEPTED.includes(f.type)),
      "Only PNG, JPEG, or WebP allowed",
    ),
});
export type AIFormValues = z.infer<typeof AIbedShema>;
