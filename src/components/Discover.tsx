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
    <div>
      <div className="flex justify-between items-center my-4 flex-wrap">
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
            className="text-[#2563EB]  font-semibold flex items-center gap-2 hover:underline"
          >
            عرض جميع المواقع
            <ChevronLeft />
          </Link>
        </div>
      </div>
      <div>
        <div className="flex flex-wrap justify-center gap-2">
          {Images.map((img) => (
            <div
              key={img.id}
              className="relative h-[200px] md:w-[411px] md:h-[411px] w-[150px]  rounded-2xl m-2  overflow-hidden "
            >
              <Image src={img.image} alt="Post" fill objectFit="cover" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Discover;
