"use client";
import { useConttactForm } from "@/app/hooks/useContactForm";
import { Input } from "./ui/input";
import { Combobox,
  ComboboxInput,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxList,
  ComboboxItem
 } from "./ui/combobox";
 import { FaWhatsapp } from "react-icons/fa";
import { Field, FieldLabel, FieldGroup } from "./ui/field";
import { Controller } from "react-hook-form";
import Link from "next/link";
const selection = [
  "جاردن فيو ",
  "whatever ",
  "whereever",
  "ballhills"
]
const ContactForm = () => {
  const { register, onSubmit, control, formState: { errors, isSubmitting } } = useConttactForm();
  return (
    <div className="">
      <form onSubmit={onSubmit}>
        <FieldGroup className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Field>
            <FieldLabel className="mb-2">الاسم الكامل</FieldLabel>
            <Input {...register("fullName")}
              type="text"
              required
              placeholder="عمرو محمد"
            />
            {errors.fullName && <p className="text-red-500">{errors.fullName.message}</p>}
          </Field>
          <Field>
            <FieldLabel className="mb-2">رقم الهاتف </FieldLabel>
            <Input {...register("phone")}
              type="text"
              required
              placeholder="010123456789 "
            />
            {errors.phone && <p className="text-red-500">{errors.phone?.message}</p>}
          </Field>
          <Field className="col-span-1 sm:col-span-2">
            <FieldLabel className="mb-2">البريد الاكتروني  </FieldLabel>
            <Input {...register("email")}
              type="text"
              required
              placeholder="Aa@gmail.com "
            />
            {errors.email && <p className="text-red-500">{errors.email?.message}</p>}
          </Field>
          <Field className="col-span-1 sm:col-span-2">
            <FieldLabel className="mb-2"> المشروع المهتم به  </FieldLabel>
            <Controller
              control={control}
              name="project"
              render={({ field }) => (
                <Combobox items={selection} value={field.value} onValueChange={field.onChange} >
                  <ComboboxInput placeholder="جاردن فيو"/>
                  <ComboboxContent>
                    <ComboboxEmpty>No items found.</ComboboxEmpty>
                      <ComboboxList>
                    {(item)=>(
                      <ComboboxItem key={item} value={item}>
                        {item}
                      </ComboboxItem>
                    )}
                  </ComboboxList>
                </ComboboxContent>
              </Combobox>
              )}            />
            {errors.project && <p className="text-red-500">{errors.project?.message}</p>}
          </Field>
          <button type="submit" className="cursor-pointer flex items-center justify-center rounded-[8px] h-[44px] bg-[#2563EB] text-white text-sm font-semibold py-3 px-2" >
            {isSubmitting ? "جاري الإرسال..." : "أرسل طلبك"}
          </button>
            <button className="flex gap-1 items-center justify-center h-[44px] rounded-[8px]  bg-[#128C7E] text-white text-sm font-semibold py-3 px-2">
              <Link href="#" className="flex gap-1 items-center justify-center">
                <FaWhatsapp className="w-5 h-5"/>
                تواصل عبر واتساب
              </Link>
            </button>
        </FieldGroup>

      </form>
    </div>
  )
}

export default ContactForm
