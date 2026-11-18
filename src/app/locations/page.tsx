"use client";

import Image from "next/image";
import { useQueryState, parseAsString } from "nuqs";
import { locations } from "@/data/locations";
import Card from "@/components/shared/Card";
import Gallary from "@/components/shared/Gallary";
const images = [
  "/post.png",
  "/post.png",
  "/post.png",
  "/post.png",
  "/post.png",
];
import { projects } from "@/data/projects";
import Link from "next/link";
import Servse from "@/components/Servse";
import { AddressMap } from "@/components/shared/Map";
const page = () => {
  const [area, setArea] = useQueryState(
    "area",
    parseAsString.withDefault("new-mansoura"),
  );
  const selectedLocation = locations.find((location) => {
    return location.value === area;
  });
  const selectedProjects = projects.filter((project) => {
    return project.city === selectedLocation?.label;
  });
  return (
    <div className="overflow-hidden">
      <div className="relative h-screen max-h-[595px] mt-1 overflow-hidden">
        <div className="absolute inset-x-3 inset-y-0 overflow-hidden rounded-[32px]">
          <Image src="/lc.jpg" alt="Hero Image" fill className="object-cover" />
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
        </div>
        <div>
          <div className="absolute inset-x-8 bottom-8 flex flex-col items-start justify-center gap-4 pb-12 px-3 text-center ">
            <h1 className="text-3xl font-semibold text-white sm:text-4xl md:text-5xl lg:text-6xl max-w-[672px] leading-relaxed">
              مواقعنا
            </h1>
          </div>
        </div>
      </div>
      {/* fitration bar */}
      <div className="w-full flex items-center gap-1 m-1  md:gap-12 md:m-4 lg:gap-15 lg:m-6 ">
        {locations.map((location) => (
          <div key={location.label}>
            <button
              type="button"
              onClick={() => setArea(location.value)}
              className={` p-2 cursor-pointer ${area === location.value ? "border-b-3 border-[1E1B1B] text-black font-semibold" : "text-[#1E1B1B]"}`}
            >
              {location.label}
            </button>
          </div>
        ))}
      </div>
      {/* selcted location  */}
      {selectedLocation && (
        <div className="p-6">
          {/* headeing  */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5">
            <div className="flex flex-col gap-5 ">
              <p className="text-sm text-[#2563EB]">عن المنطقة</p>
              <h2 className="text-3xl font-semibold">
                لماذا {selectedLocation.label}؟{" "}
              </h2>
              <p className="text-[#6F6F6F]">{selectedLocation.description}</p>
            </div>
            <div className="flex flex-col border rounded-2xl ">
              {selectedLocation.details.map((loc, index) => (
                <div
                  className={`flex justify-between items-center p-4 border-b ${index === selectedLocation.details.length - 1 ? "border-none" : ""}`}
                  key={loc.id}
                >
                  <p>{loc.name}</p>
                  <p className="text-[#2563EB]">{loc.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* the image  */}
      <div>
        <AddressMap mapSrc="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d54694.731463116346!2d31.393041122172278!3d31.042385372664107!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14f79daec39dd347%3A0x1e86074b651b494e!2z2KfYs9iq2KfYryDYp9mE2YXZhti12YjYsdmHINin2YTYsdmK2KfYttmKINin2YTYqg!5e0!3m2!1sar!2seg!4v1794989965872!5m2!1sar!2seg" />
      </div>
      {/* the projects */}
      <div className="flex flex-col gap-3 p-6">
        <div className="flex flex-col gap-3">
          <h2 className="text-4xl">مشاريعنا في {selectedLocation?.label}</h2>
          <p className="text-[20px] text-[#6F6F6F]">
            مشروعات عصرية لحياة أكثر رفاهية
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3   ">
          {selectedProjects
            .map((project) => (
              <Link key={project.id} href={`/projects/${project.id}`}>
                <Card
                  status={project.status}
                  location={project.location}
                  city={project.city}
                  img={project.heroImage}
                />
              </Link>
            ))
            .slice(0, 3)}
        </div>
      </div>
      {/* the gallary  */}
      <div className="flex flex-col gap-3 p-6">
        <div className="flex flex-col gap-3">
          <h2 className="text-4xl"> أجواء المنطقة {selectedLocation?.label}</h2>
          <p className="text-[20px] text-[#6F6F6F]">
            أجواء تجمع بين الهدوء والرفاهية.{" "}
          </p>
        </div>
        <Gallary images={images} />
      </div>
      {/* servises  */}
      <div className="flex  flex-col gap-5 mt-7 p-6">
        <h2 className="text-4xl ">خدمات قريبة منك</h2>
        <p className="text-xl text-[#6F6F6F]">
          مشروعات عصرية لحياة أكثر رفاهية
        </p>
        <Servse />
      </div>
    </div>
  );
};

export default page;
