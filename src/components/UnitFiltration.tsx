import React from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type FilterOption = {
  label: string;
  value: string | null;
};

const completionStatuses: FilterOption[] = [
  { label: "Select completion status", value: null },
  { label: "Completed", value: "completed" },
  { label: "Under Construction", value: "under-construction" },
  { label: "Upcoming", value: "upcoming" },
  { label: "On Hold", value: "on-hold" },
];
const locations: FilterOption[] = [
  { label: "Select a location", value: null },
  { label: "New Cairo", value: "new-cairo" },
  { label: "Sheikh Zayed", value: "sheikh-zayed" },
  { label: "6th of October", value: "6th-of-october" },
  { label: "New Administrative Capital", value: "new-capital" },
  { label: "North Coast", value: "north-coast" },
  { label: "Mansoura", value: "mansoura" },
];
const projectTypes: FilterOption[] = [
  { label: "Select project type", value: null },
  { label: "Residential", value: "residential" },
  { label: "Commercial", value: "commercial" },
  { label: "Administrative", value: "administrative" },
  { label: "Medical", value: "medical" },
  { label: "Mixed-Use", value: "mixed-use" },
  { label: "Coastal", value: "coastal" },
];
const FiltrationBar = () => {
  return (
    <div className="flex justify-between items-center my-4 flex-wrap">
        {/* for the paragraf */}
        <div className="flex flex-col gap-4">
            <p className="text-[#2563EB] text-sm ">الوحدات المتاحة</p>
            <h1 className="text-4xl ">اختر وحدتك </h1>
            <p className="text-xl text-[#6F6F6F]"> اكتشف الوحدة المناسبة لك</p>
        </div>
      <div className="flex  gap-2 flex-wrap">
        {/* for the location  */}
        <div className="w-[164px]">
          <Select items={locations}>
            <SelectTrigger className="w-full  ">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                {locations.map((location) => (
                  <SelectItem key={location.value} value={location.value}>
                    {location.value}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        <div className="w-[164px]">
          <Select items={completionStatuses}>
            <SelectTrigger className="w-full  ">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                {completionStatuses.map((stuts) => (
                  <SelectItem key={stuts.value} value={stuts.value}>
                    {stuts.value}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        <div className="w-[164px]">
          <Select items={projectTypes}>
            <SelectTrigger className="w-full  ">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                {projectTypes.map((project) => (
                  <SelectItem key={project.value} value={project.value}>
                    {project.value}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>
  );
};

export default FiltrationBar;
