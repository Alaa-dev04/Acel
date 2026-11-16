import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import React from "react";
import Image from "next/image";

const Images = [
  {
    id: 1,
    image: "/post.png",
  },
  {
    id: 2,
    image: "/post.png",
  },
  {
    id: 3,
    image: "/post.png",
  },
  {
    id: 4,
    image: "/post.png",
  },
  {
    id: 5,
    image: "/post.png",
  },
];
const Discover = () => {
  return (
    <div className="p-6">
      <div className="flex justify-between items-center my-4 flex-wrap ">
        <div className="">
          <h1 className="text-4xl "> اكتشف المواقع</h1>
          <p className="text-xl my-2 text-[#6F6F6F]">
            {" "}
            من قلب المدينة الي امتدادتها الجديدة{" "}
          </p>
        </div>
        <div className="flex justify-center my-6">
          <Link
            href="/projects"
            className="text-[#2563EB]  font-semibold flex items-center gap-2 hover:-translate-x-1.5 duration-75"
          >
            عرض جميع المواقع
            <ChevronLeft />
          </Link>
        </div>
      </div>
      <div>
        <div className="flex flex-wrap lg:flex-nowrap  justify-center gap-7 ">
          {Images.map((img) => (
            <div
              key={img.id}
              className=" min-h-[350px]  rounded-2xl   "
            >
              <img src={img.image} alt="Post" className="w-full h-full rounded-2xl"  />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Discover;
