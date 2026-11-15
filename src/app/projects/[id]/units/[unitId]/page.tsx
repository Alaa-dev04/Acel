"use client";
import { getUnit } from "@/data/units";
import { getProjectById } from "@/data/projects";
import { notFound, useParams } from "next/navigation";
import Image from "next/image";
import { BedDouble, Bath, LandPlot } from "lucide-react";
import Gallary from "@/components/shared/Gallary";
import Card from "@/components/shared/Card";
const page = () => {
  const { id, unitId } = useParams<{ id: string; unitId: string }>();
  const unit = getUnit(id, unitId);
  const project = getProjectById(id);
  if (!unit || !project) notFound();
  return (
    <div>
      <div className="relative h-screen max-h-[595px] mt-1 overflow-hidden">
        <div className="absolute inset-x-3 inset-y-0 overflow-hidden rounded-[32px]">
          <Image src={unit?.image} alt="Hero Image" fill className="" />
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/20" />
        </div>
        <div>
          <div className="absolute inset-x-8 bottom-8 flex flex-col items-start ite  gap-4 pb-12 px-3 text-center ">
            <p className="text-white ">{project?.name}</p>
            <h2 className="text-white font-semibold text-[64px] ">
              {unit?.name}
            </h2>
            <div className=" flex flex-wrap justify-between items-start gap-5 bg-[#EDEFEE] p-5 rounded-2xl">
              <div className="w-[86px] lg:w-[108px] md:w-[108px] border-l border-[#6F6F6F] flex flex-col gap-1.5 items-start ">
                <p className="text-[12px] text-[#6F6F6F] ">يبدأ من</p>
                <p className="text-[#2563EB] text-sm ">{unit.price} ج.م</p>
              </div>
              <div className="w-[86px] lg:w-[108px] md:w-[108px] border-l border-[#6F6F6F] flex flex-col gap-1.5 items-start">
                <p className="text-[12px] text-[#6F6F6F]">المقدّم</p>
                <p className="text-[#2563EB] text-sm ">{unit.starter}%</p>
              </div>
              <div className="w-[86px] lg:w-[108px] md:w-[108px] flex flex-col gap-1.5 items-start">
                <p className="text-[12px]  text-[#6F6F6F]">مدة التقسيط</p>
                <p className="text-[#2563EB] text-sm ">{unit.years} سنوات</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-5 my-10 mx-6">
        {/* about project  */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2    gap-7 mx-6 my-15">
          {/* about project */}
          <div className="flex flex-col justify-center gap-7 ">
            <div className="flex flex-col  gap-7 ">
              <p className="text-sm text-[#2563EB]">المسقط الأفقي </p>
              <h3 className="font-semibold text-3xl">
                مساحات مدروسة لكل تفصيلة
              </h3>
            </div>
            {/* the under dev  */}
            <div className=" flex justify-between flex-wrap items-center py-3 m-3 border-t border-[#6F6F6F]">
              <div className="flex justify-center items-center gap-2 my-3 ">
                <BedDouble className="text-[#2563EB] w-5 h-5" />
                <h3 className="text-2xl font-semibold ">
                  {unit.bedrooms}غرف نوم
                </h3>
              </div>
              <div className="flex  gap-2 my-3 justify-center items-center  ">
                <Bath className="text-[#2563EB] w-5 h-5" />
                <h3 className="text-2xl font-semibold ">
                  {unit.bathrooms}حمّامات
                </h3>
              </div>
              <div className="flex  gap-2 my-3 justify-center items-center  ">
                <LandPlot className="text-[#2563EB] w-5 h-5" />
                <h3 className="text-2xl font-semibold ">{unit.area} م²</h3>
              </div>
            </div>
          </div>
          {/* the image  */}
          <div>
            <img
              alt="project map"
              src={unit.masterImage}
              className=" object-cover rounded-2xl"
            />
          </div>
        </div>
        {/* the gallary  */}
        <div>
          <div className="flex flex-col gap-13 mx-6">
            <div className="flex flex-col gap-3">
              <p className="text-sm text-[#2563EB]">معرض الوحدة </p>
              <h2 className="text-3xl font-semibold"> من الداخل والخارج </h2>
            </div>

            <Gallary images={project?.gallery} />
          </div>
        </div>
        {/* the unit choosing */}
        <div className="flex flex-col gap-13">
          <div className="flex flex-col gap-4">
            <p className="text-[#2563EB] text-sm ">الوحدات </p>
            <h1 className="text-4xl ">وحدات مشابهة </h1>
            <p className="text-xl text-[#6F6F6F]"> اكتشف الوحدة المناسبة لك</p>
          </div>
          <div className=" grid grid-cols-1 lg:grid-cols-3 md:grid-cols-3">
            {project.units
              .map((u) => (
                <div key={u.id}>
                  <Card
                    city={u.location}
                    img={u.image}
                    status={u.status}
                    location={u.location}
                  />
                </div>
              ))
              .slice(0, 3)}
          </div>
        </div>

        {/* servises  */}
        <div className="flex  flex-col gap-5 mt-7">
          <h2 className="text-4xl ">خدمات قريبة منك</h2>
          <p className="text-xl text-[#6F6F6F]">
            مشروعات عصرية لحياة أكثر رفاهية
          </p>
          <div className="flex gap-5 flex-wrap lg:flex-nowrap">
            {Array.from({ length: 4 }).map((_, index) => (
              <div key={index} className=" flex">
                <img
                  src="/hos.png"
                  alt="servesis"
                  className=" object-contain rounded-2xl m-3 "
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
