"use client";
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
  value: string;
};
const locations: FilterOption[] = [
  { label: "كل المواقع", value: "all" },
  { label: "المنصورة الجديدة", value: "المنصورة الجديدة" },
  { label: "حي توريل", value: "حي توريل" },
  { label: "شارع الجمهورية", value: "شارع الجمهورية" },
  { label: "طلخا", value: "طلخا" },
];
const projectTypes: FilterOption[] = [
  { label: "  نوع المشروع", value: "all" },
  { label: "Residential", value: "residential" },
  { label: "Commercial", value: "commercial" },
  { label: "Administrative", value: "administrative" },
  { label: "Medical", value: "medical" },
  { label: "Mixed-Use", value: "mixed-use" },
  { label: "Coastal", value: "coastal" },
];

type FiltrationBarProps = {
  location: string;
  status: string;
  onLocationChange: (value: string) => void;
  onStatusChange: (value: string) => void;
};

const completionStatuses: FilterOption[] = [
  { label: "كل الحالات", value: "all" },
  { label: "مكتمل", value: "مكتمل" },
  { label: "قيد الإنشاء", value: "قيد الإنشاء" },
  { label: "قريباً", value: "قريباً" },
];
const FiltrationBar = ({
  location,
  status,
  onLocationChange,
  onStatusChange,
}: FiltrationBarProps) => {
  return (
    <div className="flex justify-between items-center my-4 flex-wrap">
      {/* for the paragraf */}
      <div className="">
        <h1 className="text-4xl ">مشروعات مختارة</h1>
        <p className="text-xl my-2 text-[#6F6F6F]">
          عناوين مدروسة بعناية في أرقى مناطق المنصورة
        </p>
      </div>
      <div className="flex  gap-2 flex-wrap">
        {/* for the location  */}
        <div className="w-[164px]">
          <Select
            value={location}
            onValueChange={(value) => {
              if (value !== null) onLocationChange(value);
            }}
            items={locations}
          >
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
          <Select
            items={completionStatuses}
            value={status}
            onValueChange={(value) => {
              if (value !== null) onStatusChange(value);
            }}
          >
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
          <Select items={projectTypes} defaultValue="all">
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
