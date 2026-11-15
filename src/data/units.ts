export type Unit = {
  id: string;
  projectId: string; // links the unit to its project
  name: string;
  type: "شقة" | "فيلا" | "تاون هاوس";
  area: number; // m²
  bedrooms: number;
  bathrooms: number;
  starter: number;
  floor?: number; // optional (not for villas)
  price: number;
  image: string;
  years: number;
  masterImage:string;
  description: string;
};

export const units: Unit[] = [
  // ---- project 1: أسيل جاردنز ----
  {
    id: "101",
    projectId: "1",
    name: "شقة 101",
    type: "شقة",
    area: 140,
    bedrooms: 3,
    bathrooms: 2,
    masterImage:"/unit.png",
    years: 7,
    starter: 15,
    floor: 1,
    price: 5200000,
    image: "/hero.jpg",
    description: "شقة بإطلالة على الحديقة المركزية وتشطيب كامل.",
  },
  {
    id: "102",
    projectId: "1",
    name: "فيلا 102",
    type: "فيلا",
    area: 320,
    bedrooms: 5,
    bathrooms: 4,
    years: 7,
    masterImage:"/unit.png",
    starter: 15,
    price: 8500000,
    image: "/projectid.png",
    description: "فيلا مستقلة بحديقة خاصة وحمام سباحة.",
  },
  {
    id: "103",
    projectId: "1",
    name: "تاون هاوس 103",
    type: "تاون هاوس",
    area: 210,
    bedrooms: 4,
    years: 7,
    masterImage:"/unit.png",
    bathrooms: 3,
    starter: 15,
    price: 6900000,
    image: "/projectid.png",
    description: "تاون هاوس بثلاثة أدوار وروف خاص.",
  },

  // ---- project 2: برج الجمهورية ----
  {
    id: "201",
    projectId: "2",
    name: "شقة 201",
    years: 7,
    type: "شقة",
    area: 120,
    bedrooms: 2,
    bathrooms: 2,
    masterImage:"/unit.png",
    starter: 15,
    floor: 5,
    price: 3100000,
    image: "/projectid.png",
    description: "شقة بالدور الخامس بإطلالة مفتوحة على المدينة.",
  },
  {
    id: "202",
    projectId: "2",
    name: "شقة 202",
    type: "شقة",
    area: 165,
    years: 7,
    bedrooms: 3,
    masterImage:"/unit.png",
    bathrooms: 3,
    starter: 15,
    floor: 8,
    price: 4200000,
    image: "/projectid.png",
    description: "شقة واسعة بالدور الثامن وشرفة كبيرة.",
  },

  // ---- project 3: لاجون هايتس (coming soon, no units yet) ----
];

export const getUnitsByProject = (projectId: string) =>
  units.filter((u) => u.projectId === projectId);

export const getUnit = (projectId: string, unitId: string) =>
  units.find((u) => u.projectId === projectId && u.id === unitId);
