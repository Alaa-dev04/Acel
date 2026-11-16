"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "motion/react";

const stats = [
  { value: "5+", title: "عامًا من الخبرة" },
  { value: "5", title: "مواقع مميزة" },
  { value: "6", title: "مشروعات قائمة" },
];
const Split = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });
  const progress = useSpring(scrollYProgress, { damping: 20, mass: 0.3 });
  const scale = useTransform(progress, [0, 0.4], [0.99, 0.58]);
  const leftRounded = useTransform(
    progress,
    [0, 0.4],
    ["0px 0px 0px 0px", "0px 32px 32px 0px"],
  );

  const rightRounded = useTransform(
    progress,
    [0, 0.4],
    ["0px 0px 0px 0px", "32px 0px 0px 32px"],
  );
  const contentopacity = useTransform(progress, [0.2, 0.4], [0, 1]);
  return (
    <div ref={ref} className=" h-[200vh]">
      <div className="sticky top-0 h-screen overflow-hidden bg-white">
        <motion.div
          className="absolute inset-0 z-0 flex flex-col justify-center items-center gap-3 md:gap-8 px-[30%] md:px-0"
          style={{ opacity: contentopacity }}
        >
          <h1 className="font-bold text-[4.5vw] md:text-[42px] text-center leading-tight">
            ثقة تُبني علي أرض الواقع
          </h1>
          <div className="flex w-full justify-center">
            {stats.map((s, index) => (
              <div
                key={s.title}
                className={`flex flex-1 md:flex-none flex-col justify-center items-center text-center gap-1 md:gap-4 px-[1vw] md:px-3 p-2 md:p-3 ${
                  index === stats.length - 1 ? "border-none" : "border-l"
                }`}
              >
                <h3 className="text-[#2563EB] text-[5vw] md:text-4xl">
                  {s.value}
                </h3>
                <p className="text-[#6F6F6F] text-[2.6vw] md:text-[22px] leading-tight">
                  {s.title}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
        <motion.img
          src="building.png"
          style={{ scale, borderRadius: leftRounded }}
          className="absolute top-0 left-0 h-full z-10  w-[50%] object-cover origin-left    "
        />
        <motion.img
          src="pool.png"
          style={{ scale, borderRadius: rightRounded }}
          className="absolute top-0 right-0 h-full z-10 w-[50%] object-cover origin-right "
        />
      </div>
    </div>
  );
};

export default Split;
