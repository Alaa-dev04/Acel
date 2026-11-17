"use client";
import Card from "./shared/Card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import { projects } from "@/data/projects";
import Link from "next/link";
import { useQueryState, parseAsString } from "nuqs";
import FiltrationBar from "@/components/FiltrationBar";
const CarsoulGllary = () => {
  const [location, setLocation] = useQueryState(
    "location",
    parseAsString.withDefault("all"),
  );
  const [status, setStatus] = useQueryState(
    "status",
    parseAsString.withDefault("all"),
  );
  const filtaredProjects = projects.filter((project) => {
    const selectedLocation = location === "all" || project.city === location;
    const selectedStatus = status === "all" || project.status === status;
    return selectedLocation && selectedStatus;
  });
  return (
    <div className="">
      <FiltrationBar
        location={location}
        onLocationChange={setLocation}
        status={status}
        onStatusChange={setStatus}
      />
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
            {filtaredProjects.map((project) => (
              <CarouselItem
                key={project.id}
                className="md:basis-1/2 lg:basis-1/3"
              >
                <Link href={`/projects/${project.id}`} key={project.id}>
                  <Card
                    key={project.price}
                    status={project.status}
                    img={project.heroImage}
                    city={project.city}
                    location={project.location}
                    price={project.price}
                  />
                </Link>
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
