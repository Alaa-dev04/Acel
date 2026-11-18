"use client";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import { locations } from "@/data/locations";
import { motion } from "motion/react";
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
            href="/locations"
            className="text-[#2563EB]  font-semibold flex items-center gap-2 hover:-translate-x-1.5 duration-75"
          >
            عرض جميع المواقع
            <ChevronLeft />
          </Link>
        </div>
      </div>
      <div>
        <div className=" grid grid-cols-2 md:grid-cols-4  gap-7 ">
          {locations.map((img) => (
            <motion.div
              key={img.id}
              initial="ymotion"
              whileHover="hover"
              className="group relative min-h-[200px] md:min-h-[350px] m-2 overflow-hidden rounded-2xl cursor-pointer"
            >
              <Link
                href={`/locations?area=${img.value}`}
                key={img.id}
                className="   rounded-2xl   "
              >
                <img
                  src={img.image}
                  alt="Post"
                  className="w-full h-full  object-cover rounded-2xl  transition-transform duration-300 group-hover:scale-110"
                />
                <motion.div
                  variants={{ ymotion: { y: "100%" }, hover: { y: 0 } }}
                  transition={{ duration: 0.4 }}
                  className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[#2563EB] to-transparent max-md:!transform-none"
                >
                  <div className="text-white absolute right-3 top-2">
                    {img.label}
                  </div>
                </motion.div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Discover;
