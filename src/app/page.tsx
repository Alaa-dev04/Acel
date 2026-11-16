import Hero from "@/components/Hero";
import CarsoulGllary from "@/components/CarsoulGllary";
import FiltrationBar from "@/components/FiltrationBar";
import Link from "next/dist/client/link";
import { ChevronLeft } from "lucide-react";
import Discover from "@/components/Discover";
import { ComparisonCustomHandleDemo } from "@/components/shared/Comarison";
import Split from "@/components/Split";
const projects = 
  {
    id: "garden-view",
    name: "جاردن ڤيو",
    description:
      "اكتشف أول مجمع سكني مميز من أسيل مخصص للفيلات المستقلة في شرق المنصورة، بموقع استراتيجي على شارع توريل، حيث يجتمع التصميم العصري مع الخصوصية والراحة لتجربة سكنية استثنائية",
  }
;
export default function Home() {
  return (
    <>
      <Hero />
      <div className="m-4">
        <FiltrationBar />
        <CarsoulGllary />
        <div className="flex justify-center my-6">
          <Link
            href="/projects"
            className="text-[#2563EB]  font-semibold flex items-center gap-2 hover:-translate-x-1.5 duration-75"
          >
            عرض جميع المشروعات
            <ChevronLeft />
          </Link>
        </div>
      </div>
      <Discover />
      <Split/> 
      {/* the finast projects  */}
        <div className="grid grid-cols-1 md:grid-cols-2 p-6 lg:grid-cols-2 mb-15" >
            <div className="flex flex-col gap-3 max-w-[519px] justify-center">
                <p className="text-[#2563EB] text-sm ">
                  أحدث مشروعاتنا
                </p>
                <h3 className="font-bold text-4xl ">
                  {projects.name}
                </h3>
                <p className="text-[#6F6F6F]">
                  {projects.description}
                </p>
              <div className="flex gap-3 ">
                <button className="rounded-lg cursor-pointer text-white bg-[#2563EB] w-[302px] h-[44px] flex items-center justify-center ">
                 احجز الان< ChevronLeft/>
                </button>
                <button className="px-7 cursor-pointer text-[#2563EB] rounded-lg border border-[#2563EB] ">
                  اعرف المزيد
                </button>
              </div>
            </div>
        </div>
      <div>
        <div className="flex justify-between items-center  flex-wrap p-6 ">
          <div className="">
            <h1 className="text-4xl ">  تخيّل مساحتك قبل أن تسكنها</h1>
            <p className="text-xl my-2 text-[#6F6F6F]">
              {" "}ارفع صورة لغرفتك، واختر الطراز والألوان، ودع استوديو التصميم الذكي يقترح عليك تصورًا جديدًا
            </p>
          </div>
          <div className="flex justify-center my-6">
            <Link
              href="/ai"
              className="bg-[#2563EB] py-3 px-6 rounded-xl text-white font-semibold flex items-center gap-2 hover:scale-105 duration-75"
            >
              جرب الان
              <ChevronLeft />
            </Link>
          </div>
        </div>
       
        <ComparisonCustomHandleDemo />
      </div>
    </>
  );
}
