import React from "react";
import Card from "./shared/Card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
const projects = [
  {
    status: "مكتمل",
    location: "المنصورة الجديدة",
    price: 8500000,
    city: "الدقهلية",
    img: "/post.png",
  },
  {
    status: "تحت الإنشاء",
    location: "القاهرة الجديدة",
    price: 5000000,
    city: "القاهرة",
    img: "/post.png",
  },
  {
    status: "قريباً",
    location: "العاصمة الإدارية الجديدة",
    city: "القاهرة",
    price: 7500000,
    img: "/post.png",
  },
  {
    status: "مكتمل",
    location: "دمياط الجديدة",
    price: 3200000,
    city: "دمياط",
    img: "/post.png",
  },
  {
    status: "تحت الإنشاء",
    location: "الساحل الشمالي",
    price: 6500000,
    city: "مطروح",
    img: "/post.png",
  },
  {
    status: "تحت الإنشاء",
    location: "الساحل الشمالي",
    price: 650000,
    city: "مطروح",
    img: "/post.png",
  },
  {
    status: "تحت الإنشاء",
    location: "الساحل الشمالي",
    price: 650,
    city: "مطروح",
    img: "/post.png",
  },
];
const CarsoulGllary = () => {
  return (
    <div className="">
         <div className=" grid w-full ">
      <Carousel
        opts={{
          align: "start",
          direction: "rtl",
          loop: true,
        }}
        className="grid relative w-full"
      >
        <CarouselContent className="-ml-4">
          {projects.map((project) => (
            <CarouselItem
              key={project.price}
              className="md:basis-1/2 lg:basis-1/3"
            >
              <Card
                key={project.price}
                status={project.status}
                img={project.img}
                city={project.city}
                location={project.location}
                price={project.price}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="flex ">
          <div className="absolute top-1/2 right-2 flex items-center justify-center">
            <CarouselPrevious className="relative left-0 translate-x-0 hover:translate-x-0 hover:bg-primary/90" />
          </div>
          <div className="absolute top-1/2 left-2 flex items-center justify-center">
            <CarouselNext className="relative right-0 translate-x-0 hover:translate-x-0 hover:bg-primary/90 bg-[#2563EB]" />
          </div>
        </div>
      </Carousel>
    </div>
    </div>
   
  );
};

export default CarsoulGllary;
