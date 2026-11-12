import Image from "next/image";
import { Badge } from "../ui/badge";
type props = {
  status: string;
  location: string;
  price?: number;
  city: string;
  img: string;
};
const Card = ({ status, location, city, img, price }: props) => {
  return (
    <div className="relative h-screens h-[411px]  m-2  overflow-hidden ">
      <div className=" absolute inset-0 overflow-hidden rounded-2xl">
        <Image
          src={img}
          alt="IMAGE"
          fill
          className="object-cover rounded-2xl "
        />
        {/* overlay  */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
      </div>
      <Badge className="absolute inset-4">{status}</Badge>
      <div className="absolute bottom-5 right-2 flex flex-col gap-1 text-white">
        <span className="text-sm "> {location}</span>
        <p className="text-xl">{city}</p>
      </div>
      {price && (
        <div className="absolute bottom-8 left-2  text-white">
          <span>تبدا من {price} ج.م</span>
        </div>
      )}
    </div>
  );
};

export default Card;
