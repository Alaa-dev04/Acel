"use client";
import Image from "next/image";
import { getProjectById } from "@/data/projects";
import { useParams } from "next/navigation";

const page = () => {
  const { id } = useParams<{ id: string }>();
  const project = getProjectById(id);
  if (!project) return null;

  return (
    <div className="relative h-screen max-h-[595px] mt-1 overflow-hidden">
      <div className="absolute inset-x-3 inset-y-0 overflow-hidden rounded-[32px]">
        <Image src={project?.heroImage} alt="Hero Image" fill className="" />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/20" />
      </div>
      <div>
        <div className="absolute inset-x-8 bottom-8 flex flex-col items-start justify-center gap-4 pb-12 px-3 text-center ">
        <p className="text-xl leading-1.5 text-white">{project?.city}</p>
          <h1 className="text-3xl font-semibold text-white sm:text-4xl md:text-5xl lg:text-6xl max-w-[672px] leading-relaxed">
            {project?.name}
          </h1>
          <div className="flex gap-4">
            <div className="rounded-4xl bg-[#EDEFEE] text-[#2563EB]  py-2 px-5 text-sm ">
                {project?.status}
            </div>
            <div className="rounded-4xl bg-transparent border-white border text-white py-2 px-5 text-sm ">
               المساحة : {project?.area}  
            </div>
          </div>
          <div>
            <button className="w-[302px] h-[44px] leading-1.5 mt-5 rounded-[8px] flex justify-center items-center text-white bg-[#2563EB] hover:scale-105 hover:cursor-pointer" >
                استعرض الوحدات المتاحة
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
