import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { AIbedShema, type AIFormValues } from "@/shema/ai-shema";
import { toast } from "sonner";

export const useAIForm = () => {
  const form = useForm<AIFormValues>({
    resolver: zodResolver(AIbedShema),
    defaultValues: {
      Description: "",
      phone: "",
      Image: undefined,
    },
  });
  const onSubmit = async (data: AIFormValues) => {
    console.log(data);
    console.log("Files:", data.Image);
    console.log("First file:", data.Image[0]?.name);
    toast.success("we will contact you later👌 ");
    form.reset();
  };
  return {
    ...form,
    onSubmit: form.handleSubmit(onSubmit),
  };
};
