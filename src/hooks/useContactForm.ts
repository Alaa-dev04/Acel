import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  contactShema,
  type ContactFormValues,
} from "../shema/contact-schema";

export const useConttactForm = () => {
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactShema),
    defaultValues: {
      fullName: "",
      phone: "",
      email: "",
      project: "",
    },
  });
  const onSubmit = async (data: ContactFormValues) => {
    console.log(data);
  };
  return {
    ...form,
    onSubmit: form.handleSubmit(onSubmit),
  };
};
