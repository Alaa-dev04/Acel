"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { Badge } from "../ui/badge";

type Props = {
  status: string;
  location: string;
  price?: number;
  city: string;
  img: string;
};

const Card = ({ status, location, city, img, price }: Props) => {
  return (
    <motion.div
      initial="ymotion"
      whileHover="hover"
      className="group relative m-2 h-[411px] overflow-hidden rounded-2xl cursor-pointer"
    >
      <Image
        src={img}
        alt={city}
        fill
        className="object-cover transition-transform duration-300 group-hover:scale-110"
      />

      
      <motion.div
        variants={{ ymotion: { y: "100%" }, hover: { y: 0 } }}
        transition={{ duration: 0.4 }}
        className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[#2563EB] to-transparent  max-md:!transform-none"
      />

      <Badge className="absolute top-4 right-4">{status}</Badge>

      <div className="absolute bottom-5 right-4 flex flex-col gap-1 text-white">
        <span className="text-sm">{location}</span>
        <p className="text-xl">{city}</p>
      </div>

      {price && (
        <div className="absolute bottom-5 left-4 text-white">
          <span>تبدا من {price} ج.م</span>
        </div>
      )}
    </motion.div>
  );
};

export default Card;