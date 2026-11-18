"use client";
import FiltrationBar from "@/components/FiltrationBar";
import ProjectHero from "@/components/ProjectHero";
import Card from "@/components/shared/Card";
import { AddressMap } from "@/components/shared/Map";
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
          <AddressMap mapSrc="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d54694.731463116346!2d31.393041122172278!3d31.042385372664107!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14f79daec39dd347%3A0x1e86074b651b494e!2z2KfYs9iq2KfYryDYp9mE2YXZhti12YjYsdmHINin2YTYsdmK2KfYttmKINin2YTYqg!5e0!3m2!1sar!2seg!4v1794989965872!5m2!1sar!2seg"/>
          <div />
        </div>
      </div>
     
    </div>
  );
};

export default page;
