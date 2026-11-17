"use client";
import Image from "next/image";
import { getProjectById } from "@/data/projects";
import { useParams } from "next/navigation";
import { Download, ChevronLeft } from "lucide-react";
import Gallary from "@/components/shared/Gallary";
import FiltrationBar from "@/components/UnitFiltration";
import Link from "next/link";
import Card from "@/components/shared/Card";
import Servse from "@/components/Servse";
const headline = ["الموقع", "المساحة", "الوحدات"];
const page = () => {
  const { id } = useParams<{ id: string }>();
  const project = getProjectById(id);
  if (!project) return null;

  return (
    <div>
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
              <button className="w-[302px] h-[44px] leading-1.5 mt-5 rounded-[8px] flex justify-center items-center text-white bg-[#2563EB] hover:scale-105 hover:cursor-pointer">
                استعرض الوحدات المتاحة
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* about project  */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2    gap-7 mx-6 my-15">
        {/* about project */}
        <div className="flex flex-col justify-between gap-7 ">
          <div className="flex flex-col  gap-7 ">
            <p className="text-sm text-[#2563EB]">عن المشروع</p>
            <h3 className="font-semibold text-3xl">{project.aboutTitle}</h3>
            <p className="text-[#6F6F6F] text-xl ">
              {project.aboutDescription}
            </p>
          </div>
          {/* the under dev  */}
          <div className=" flex justify-between items-center py-3 m-3 border-t border-[#6F6F6F]">
            <div className="flex flex-col gap-2 my-3 ">
              <p className="text-sm text-[#6F6F6F]">{headline[0]}</p>
              <h3 className="text-2xl font-semibold ">{project.city}</h3>
            </div>
            <div className="flex flex-col gap-2 my-3 ">
              <p className="text-sm text-[#6F6F6F]">{headline[1]}</p>
              <h3 className="text-2xl font-semibold ">{project.area}</h3>
            </div>
            <div className="flex flex-col gap-2 my-3 ">
              <p className="text-sm text-[#6F6F6F]">{headline[2]}</p>
              <h3 className="text-2xl font-semibold ">{project.unitsCount}</h3>
            </div>
          </div>
        </div>
        {/* the image  */}
        <div>
          <img
            alt="project map"
            src={project.masterPlanImage}
            className="  rounded-2xl"
          />
        </div>
      </div>

      {/* the gallary  */}
      <div className="flex flex-col gap-13 mx-6">
        <div className="flex justify-between ">
          <div className="flex flex-col gap-3">
            <p className="text-sm text-[#2563EB]">المعرض </p>
            <h2 className="text-3xl font-semibold"> معرض المشروع </h2>
          </div>
          <div className="flex gap-2">
            <p className="text-sm text-[#2563EB]">تحميل الكُتيب</p>
            <Download className="w-5 h-5 text-[#2563EB]" />
          </div>
        </div>
        <Gallary images={project.gallery} />
      </div>
      {/* the map */}
      <div className="flex flex-col gap-13 mx-6 my-15">
        <div className="flex flex-col gap-3">
          <p className="text-sm text-[#2563EB]">الموقع </p>
          <h2 className="text-3xl font-semibold"> {project.location} </h2>
        </div>
        {/* the map */}
        <div className="flex flex-col  gap-13  ">
          <img alt="the big map" src={project.masterPlanImage} />
          <Link href="#">
            <div className="flex gap-2 justify-center items-center ">
              <p className="text-sm text-[#2563EB]">اكتشف المنطقة </p>
              <ChevronLeft className="w-5 h-5 text-[#2563EB]" />
            </div>
          </Link>
        </div>

        {/* the unit choosing */}
        <div className="flex flex-col gap-13">
          <FiltrationBar />
          <div className=" grid grid-cols-1 lg:grid-cols-3 md:grid-cols-3">
            {project.units
              .map((u) => (
                <div key={u.id}>
                  <Link href={`/projects/${project.id}/units/${u.id}`}>
                    <Card
                      city={u.location}
                      img={u.image}
                      status={u.status}
                      location={u.location}
                      price={u.price}
                    />
                  </Link>
                </div>
              ))
              .slice(0, 3)}
          </div>
        </div>

        {/* servises  */}
        <div className="flex  flex-col gap-5">
          <h2 className="text-4xl ">خدمات قريبة منك</h2>
          <p className="text-xl text-[#6F6F6F]">
            مشروعات عصرية لحياة أكثر رفاهية
          </p>
            <Servse/>
        </div>
      </div>
    </div>
  );
};

export default page;
