export type Project = {
  id: string;
  name: string;
  city: string;          // small line above the name in the hero
  location: string;      // shown in the stats row
  status: "مكتمل" | "قيد الإنشاء" | "قريباً";
  area: string;          // e.g. "120 فدان"
  unitsCount: number;
  price?: number;        // optional (starting price)
  heroImage: string;
  masterPlanImage: string;
  aboutTitle: string;
  aboutDescription: string;
  brochureUrl: string;
  gallery: string[];     // first image = large one
  whatsapp: string;
  phone: string;
};

export const projects: Project[] = [
  {
    id: "1",
    name: "أسيل جاردنز",
    city: "المنصورة الجديدة",
    location: "المنصورة الجديدة",
    status: "قيد الإنشاء",
    area: "120 فدان",
    unitsCount: 3,
    price: 8500000,
    heroImage: "/hero.jpg",
    masterPlanImage: "/map.png",
    aboutTitle: "مجتمع سكني متكامل تحيطه البحيرات والحدائق",
    aboutDescription:
      "صُمم أسيل جاردنز ليمنح ساكنيه حياة هادئة وسط مساحات خضراء ممتدة ومسطحات مائية، بواجهات من الحجر الطبيعي وشرفات زجاجية تطل على الحدائق.",
    brochureUrl: "#",
    gallery: [
      "/post.png",
      "/post.png",
      "/post.png",
      "/post.png",
      "/post.png",
    ],
    whatsapp: "201000000001",
    phone: "+201000000001",
  },
  {
    id: "2",
    name: "برج الجمهورية",
    city: "الدقهلية",
    location: "المنصورة",
    status: "مكتمل",
    area: "5 فدان",
    unitsCount: 48,
    price: 5000000,
    heroImage: "/hero.jpg",
    masterPlanImage: "/map.png",
    aboutTitle: "برج سكني بقلب المدينة بإطلالات مفتوحة",
    aboutDescription:
      "برج حديث بتشطيبات عالية الجودة ومواقف سيارات وخدمات متكاملة، على بعد دقائق من أهم المحاور والمراكز التجارية.",
    brochureUrl: "#",
    gallery: [
      "/post.png",
      "/post.png",
      "/post.png",
      "/post.png",
      "/post.png",
    ],
    whatsapp: "201000000002",
    phone: "+201000000002",
  },
  {
    id: "3",
    name: "لاجون هايتس",
    city: "العاصمة الإدارية",
    location: "العاصمة الإدارية الجديدة",
    status: "قريباً",
    area: "80 فدان",
    unitsCount: 120,
    // no price: "coming soon"
    heroImage: "/hero.jpg",
    masterPlanImage: "/map.png",
    aboutTitle: "كومباوند عصري على بحيرة اصطناعية",
    aboutDescription:
      "مشروع يجمع بين الفيلات والتاون هاوس مع نادٍ اجتماعي ومناطق ترفيهية ومسارات للمشي وسط الخضرة.",
    brochureUrl: "#",
    gallery: [
      "/post.png",
      "/post.png",
      "/post.png",
      "/post.png",
      "/post.png",
    ],
    whatsapp: "201000000003",
    phone: "+201000000003",
  },
];

export const getProjectById = (id: string) =>
  projects.find((p) => p.id === id);