import { z } from "zod";
export const contactShema = z.object({
  fullName: z.string().trim().min(3, "الاسم يجب أن يكون 3 أحرف على الأقل"),
  phone: z
    .string()
    .trim()
    .regex(/^01[0125][0-9]{8}$/, "رقم الهاتف غير صحيح"),

  email: z.string().trim().email("البريد الإلكتروني غير صحيح"),
  project: z
    .string()
    .min(1, "من فضلك اختر المشروع المهتم به"),
});
export type ContactFormValues = z.infer<typeof contactShema>;