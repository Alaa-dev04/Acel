"use client";
import FiltrationBar from "@/components/FiltrationBar";
import ProjectHero from "@/components/ProjectHero";
import Card from "@/components/shared/Card";
import { projects } from "@/data/projects";
import Link from "next/link";
import { useQueryState, parseAsString } from "nuqs";

const page = () => {
  const [location, setLocation] = useQueryState(
    "location",
    parseAsString.withDefault("all"),
  );
   const [status, setStatus] = useQueryState(
    "status",
    parseAsString.withDefault("all"),
  );
  const filtaredProjects = projects.filter((project)=>{
    const selectedLocation = location === "all" || project.city === location;
    const selectedStatus = status === "all" || project.status === status;
    return selectedLocation && selectedStatus;
  })
  return (
    <div>
      <ProjectHero />
      <div className="mx-5">
        <FiltrationBar
         location={location}
         onLocationChange={setLocation}
         onStatusChange={setStatus}
         status={status}
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-4 m-4">
          {filtaredProjects.map((project) => (
            <Link  href={`/projects/${project.id}`} key={project.id}>
            <Card
              status={project.status}
              location={project.location}
              city={project.city}
              img={project.heroImage}
            />
            </Link>
            
          ))}
        </div>
        <div className=" w-[97%] m-4 overflow-hidden mx-auto">
          <img src="/map.png" alt="IMAGE" className="  object-cover w-full  " />
          <div />
        </div>
      </div>
     
    </div>
  );
};

export default page;
