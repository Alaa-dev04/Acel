
"use client";

import { Upload, Camera, Sparkles, Download } from "lucide-react";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { useAIForm } from "@/hooks/useAiForm";

const AiForm = () => {
  const {
    onSubmit,
    register,
    formState: { errors },
  } = useAIForm();

  return (
    <div className="w-full p-6">
      <form onSubmit={onSubmit} className="flex flex-col gap-8">

        {/* 01 - Room Image */}
        <section className="flex flex-col gap-5">
          <div className="flex flex-col gap-2">
            <p className="text-[#2563EB] text-sm">01</p>
            <h2 className="text-2xl font-semibold">صورة الغرفة</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

            {/* Upload Image */}
            <label className=" flex  items-center justify-center gap-3 border-2  border-[#2563EB] rounded-lg p-4 cursor-pointer hover:bg-blue-50 transition">
              <Input
                type="file"
                accept="image/*"
                className=" hidden"
                {...register("Image")}
              />
              <span className="text-[#2563EB]">رفع صورة</span>
              <Upload size={24} className="text-[#2563EB]" />
            </label>

            {/* Capture Image */}
            <label className=" flex items-center justify-center gap-3 border-2  border-[#2563EB] rounded-lg p-4 cursor-pointer hover:bg-blue-50 transition">
              <Input
                type="file"
                accept="image/*"
                capture="environment"
                className=" hidden"
                {...register("Image")}
              />
              <span className="text-[#2563EB]">التقاط صورة</span>
              <Camera size={24} className="text-[#2563EB]" />
            </label>
          </div>

          {errors.Image && (
            <p className="text-sm text-red-500">
              {errors.Image.message }
            </p>
          )}
        </section>

        {/* 02 - Description */}
        <section className="flex flex-col gap-5">
          <div className="flex flex-col gap-2">
            <p className="text-[#2563EB] text-sm">02</p>
            <h2 className="text-2xl font-semibold">
              صف الأثاث والطراز
            </h2>
          </div>

          <Textarea
            className="min-h-[108px] border border-[#3D3D3D] rounded-lg resize-none"
            placeholder="مودرن دافئ بألوان البيج والخشب"
            {...register("Description")}
          />

          {errors.Description && (
            <p className="text-sm text-red-500">
              {errors.Description.message}
            </p>
          )}
        </section>

        {/* 03 - Phone */}
        <section className="flex flex-col gap-3">
          <p className="text-xs">
            <span className="text-red-500">*</span> رقم الهاتف
          </p>

          <Input
            className="border rounded-lg"
            placeholder="+20 123 456 789"
            {...register("phone")}
          />

          {errors.phone && (
            <p className="text-sm text-red-500">
              {errors.phone.message}
            </p>
          )}

          <p className="text-xs text-[#9F9F9F]">
            ليتواصل معك أحد ممثلينا
          </p>
        </section>

        {/* Buttons */}
        <section className="flex  gap-4">
          <button
            type="submit"
            className="flex items-center justify-center gap-2 text-white py-3  w-full bg-[#2563EB] rounded-lg hover:bg-blue-700 transition"
          >
            إنشاء التصميم
            <Sparkles size={18} />
          </button>

          <button
            type="button"
            className="flex items-center justify-center gap-2 py-3 w-full rounded-lg border hover:bg-gray-50 transition"
          >
            تحميل النتيجة
            <Download size={18} />
          </button>
        </section>

      </form>
    </div>
  );
};

export default AiForm;
