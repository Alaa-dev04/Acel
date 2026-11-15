
export type Unit = {
  id: string;
  name: string;
  type: string;
  location: string;
  status: "مكتمل" | "قيد الإنشاء" | "قريباً";
  area: string;
  price: number;
  image: string;
};

export type Project = {
  id: string;
  name: string;
  city: string;
  location: string;
  status: "مكتمل" | "قيد الإنشاء" | "قريباً";
  area: string;
  unitsCount: number;
  price?: number;
  heroImage: string;
  masterPlanImage: string;
  aboutTitle: string;
  aboutDescription: string;
  brochureUrl: string;
  gallery: string[];
  whatsapp: string;
  phone: string;
  units: Unit[];
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

    units: [
      {
        id: "u1",
        name: "توين هاوس بإطلالة رائعة",
        type: "توين هاوس",
        location: "المنصورة الجديدة",
        status: "قيد الإنشاء",
        area: "220 م²",
        price: 8500000,
        image: "/post.png",
      },
      {
        id: "u2",
        name: "فيلا مستقلة بحديقة خاصة",
        type: "فيلا",
        location: "المنصورة الجديدة",
        status: "قيد الإنشاء",
        area: "300 م²",
        price: 12000000,
        image: "/hero.jpg",
      },
      {
        id: "u3",
        name: "شقة فاخرة بإطلالة على البحيرة",
        type: "شقة",
        location: "المنصورة الجديدة",
        status: "قريباً",
        area: "160 م²",
        price: 4500000,
        image: "/post.png",
      },
    ],
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

    units: [
      {
        id: "u4",
        name: "شقة سكنية بتصميم عصري",
        type: "شقة",
        location: "المنصورة",
        status: "مكتمل",
        area: "140 م²",
        price: 5000000,
        image: "/post.png",
      },
      {
        id: "u5",
        name: "شقة بإطلالة بانورامية",
        type: "شقة",
        location: "المنصورة",
        status: "مكتمل",
        area: "180 م²",
        price: 6500000,
        image: "/hero.jpg",
      },
      {
        id: "u6",
        name: "وحدة تجارية",
        type: "تجاري",
        location: "المنصورة",
        status: "مكتمل",
        area: "90 م²",
        price: 7500000,
        image: "/post.png",
      },
    ],
  },

  {
    id: "3",
    name: "لاجون هايتس",
    city: "العاصمة الإدارية",
    location: "العاصمة الإدارية الجديدة",
    status: "قريباً",
    area: "80 فدان",
    unitsCount: 120,
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

    units: [
      {
        id: "u7",
        name: "فيلا مستقلة على البحيرة",
        type: "فيلا",
        location: "العاصمة الإدارية الجديدة",
        status: "قريباً",
        area: "350 م²",
        price: 15000000,
        image: "/hero.jpg",
      },
      {
        id: "u8",
        name: "تاون هاوس بحديقة خاصة",
        type: "تاون هاوس",
        location: "العاصمة الإدارية الجديدة",
        status: "قريباً",
        area: "240 م²",
        price: 9500000,
        image: "/post.png",
      },
      {
        id: "u9",
        name: "توين هاوس بإطلالة مميزة",
        type: "توين هاوس",
        location: "العاصمة الإدارية الجديدة",
        status: "قريباً",
        area: "280 م²",
        price: 11000000,
        image: "/hero.jpg",
      },
    ],
  },
];

export const getProjectById = (id: string) =>
  projects.find((p) => p.id === id);
