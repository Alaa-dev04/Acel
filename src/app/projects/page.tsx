import FiltrationBar from "@/components/FiltrationBar";
import ProjectHero from "@/components/ProjectHero";
import Card from "@/components/shared/Card";
const projects = [
  {
    id: 1,
    status: "مكتمل",
    location: "القاهرة الجديدة",
    city: "التجمع الخامس",
    img: "/post.png",
  },
  {
    id: 2,
    status: "تحت الإنشاء",
    location: "الشيخ زايد",
    city: "زايد الجديدة",
    img: "/post.png",
  },
  {
    id: 3,
    status: "قريباً",
    location: "العاصمة الإدارية",
    city: "الحي السكني R7",
    img: "/post.png",
  },
  {
    id: 4,
    status: "مكتمل",
    location: "الساحل الشمالي",
    city: "رأس الحكمة",
    img: "/post.png",
  },
  {
    id: 5,
    status: "تحت الإنشاء",
    location: "مدينة 6 أكتوبر",
    city: "التوسعات الشمالية",
    img: "/post.png",
  },
  {
    id: 6,
    status: "قريباً",
    location: "القاهرة الجديدة",
    city: "مدينة المستقبل",
    img: "/post.png",
  },
  {
    id: 7,
    status: "مكتمل",
    location: "المنصورة الجديدة",
    city: "المنطقة الساحلية",
    img: "/post.png",
  },
  {
    id: 8,
    status: "تحت الإنشاء",
    location: "العين السخنة",
    city: "الجلالة",
    img: "/post.png",
  },
  {
    id: 9,
    status: "قريباً",
    location: "الشيخ زايد",
    city: "زايد هايتس",
    img: "/post.png",
  },
];
const page = () => {
  return (
    <div>
      <ProjectHero />
      <div className="mx-5">
        <FiltrationBar />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-4 m-4">
          {projects.map((project) => (
            <Card
              key={project.id}
              status={project.status}
              location={project.location}
              city={project.city}
              img={project.img}
            />
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
