"use client";
import { motion } from "motion/react";

const servises = [
  { id: 1, img: "/hos.png", lable: "hospital" },
  { id: 2, img: "/club.png", lable: "club" },
  { id: 3, img: "/mall.png", lable: "mall" },
  { id: 4, img: "/school.png", lable: "school" },
];
const Servse = () => {
  return (
    <div>
      <div className=" grid grid-cols-2 md:grid-cols-4  gap-7 ">
        {servises.map((img) => (
          <motion.div
            key={img.id}
            initial="ymotion"
            whileHover="hover"
            className="group relative m-2 overflow-hidden rounded-2xl cursor-pointer"
          >
            <img
              src={img.img}
              alt="Post"
              className="w-full h-full rounded-2xl  transition-transform duration-300 group-hover:scale-110"
            />
            <motion.div
              variants={{ ymotion: { y: "100%" }, hover: { y: 0 } }}
              transition={{ duration: 0.4 }}
              className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[#2563EB] to-transparent max-md:!transform-none"
            >
              <div className="text-white absolute right-3 top-2">
                {img.lable}
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Servse;
