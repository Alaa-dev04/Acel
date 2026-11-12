import AboutHero from "@/components/AboutHero";
import Gallary from "@/components/shared/Gallary";
const images = [
  "/post.png",
  "/post.png",
  "/post.png",
  "/post.png",
  "/post.png",
];
const timelineItems = [
  {
    id: 1,
    date: "تاريخنا",
    title: "تأسيس الشركة",
    description:
      "انطلقت شركة ACEL لتصبح واحدة من الشركات الرائدة في التطوير العقاري",
  },
  {
    id: 2,
    date: "التوسّع",
    title: "أول مشروع متكامل",
    description: "إطلاق أول مشروع سكني متكامل في القاهرة الجديدة",
  },
  {
    id: 3,
    date: "اليوم",
    title: "محفظة متنامية",
    description: "مشاريع في القاهرة الجديدة والشيخ زايد",
  },
];
const page = () => {
  return (
    <div>
      <AboutHero />
      <div className="flex flex-col gap-14 mx-6">
        <div>
          {/*heading  */}
          <div className="   mx-4 my-9 ">
            <div className=" flex flex-col gap-3 my-11 ">
              <p className="text-sm text-[#2563EB]">تاريخنا</p>
              <h2 className="text-3xl font-semibold">مسيرة أسيل</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-3 gap-7">
              {timelineItems.map((item) => (
                <div
                  className=" flex flex-col gap-2 border-t h-[118px] p-1 border-[#2563EB]  "
                  key={item.id}
                >
                  <p className="text-sm text-[#2563EB] mt-4 ">{item.date}</p>
                  <h3 className="font-semibold text-2xl">{item.title}</h3>
                  <p className="text-[#6F6F6F] ">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1  sm:grid-cols-2 md:grid-cols-2 gap-5 flex-wrap mx-4 my-9 justify-start items-center">
          <div className="border border-[#2563EB] rounded-[12px]  flex flex-col gap-6 justify-center items-start px-9 py-[72px] ">
            <h2 className="text-3xl text-[#2563EB] font-semibold">رؤيتنا</h2>
            <p className="text-[#6F6F6F] text-2xl ">
              أن نكون الخيار الأول لمن يبحث عن منزل يجمع بين الجمال والراحة
              والقيمة المستدامة
            </p>
          </div>
          <div className="border border-[#2563EB] rounded-[12px]  flex flex-col gap-6 justify-center items-start p-9 py-[72px]">
            <h2 className="text-3xl text-[#2563EB] font-semibold">رسالتنا</h2>
            <p className="text-[#6F6F6F] text-2xl ">
              تطوير مجتمعات متكاملة بتصميم معاصر ومواد عالية الجودة وخدمة شفافة
              من البداية حتى التسليم
            </p>
          </div>
        </div>
        <div className="flex flex-col justify-center items-start flex-wrap mx-4 ">
          <div className=" flex flex-col gap-3 ">
            <p className="text-sm text-[#2563EB]">شركاؤنا</p>
            <h2 className="text-3xl font-semibold"> شركاء النجاح</h2>
          </div>
          <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-6  gap-5  ">
            {Array.from({ length: 6 }).map((_, index) => (
              <div key={index} className=" ">
                <img
                  src="/partner.png"
                  alt="Partner Logo"
                  className=" object-contain m-3 "
                />
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col justify-center items-start flex-wrap mx-4 ">
          <div className=" flex flex-col gap-3 ">
            <p className="text-sm text-[#2563EB]">الجوائز والشهادات</p>
            <h2 className="text-3xl font-semibold"> الجوائز والاعتمادات </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 my-4 gap-5  ">
            {Array.from({ length: 4}).map((_, index) => (
              <div key={index} className=" ">
                <img
                  src="/prize.png"
                  alt="Partner Logo"
                  className=" object-contain m-3 "
                />
              </div>
            ))}
          </div>
        </div>
        <div>
            <div className=" flex flex-col gap-3 mb-6 ">
            <p className="text-sm text-[#2563EB]"> أعمالنا </p>
            <h2 className="text-3xl font-semibold">معرض الاعمال   </h2>
          </div> 
          <Gallary images={images} />   
        </div>
       
      </div>
    </div>
  );
};

export default page;
