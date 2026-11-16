import { ChevronsLeftRightIcon } from "lucide-react";
import {
  Comparison,
  ComparisonHandle,
  ComparisonItem,
} from "@/components/ui/comparison";
export const ComparisonCustomHandleDemo = () => (
  <div className="flex flex-col h-full p-6 justify-center items-center gap-5 ">
    <Comparison className="aspect-video  rounded-xl" defaultValue={35}>
      <ComparisonItem position="start">
        <img
          alt="Before"
          className="size-full scale-105 object-cover "
          draggable={false}
          src="/empty.png"
        />
      </ComparisonItem>

      <ComparisonItem position="end">
        <img
          alt="After: the lake in focus"
          className="size-full object-cover"
          draggable={false}
          src="/fin.png"
        />
      </ComparisonItem>
      <ComparisonHandle>
        <span className="absolute inset-x-0 inset-y-0 mx-auto w-px bg-background/80 " />

        <span className="relative flex size-9 items-center justify-center rounded-full border-2 border-background bg-background text-background shadow-md backdrop-blur-sm group-focus-visible/comparison-handle:ring-[3px] group-focus-visible/comparison-handle:ring-ring/50">
          <ChevronsLeftRightIcon
            aria-hidden="true"
            className="size-4 text-[#2563EB]"
          />
        </span>
      </ComparisonHandle>
    </Comparison>
    <div className="flex w-[70%] justify-between p-2 ">
      <span className=" text-3xl">قبل</span>
      <span className=" text-3xl">بعد</span>
    </div>
  </div>
);
