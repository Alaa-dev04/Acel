import React from "react";
type images = {
  images: string[];
};
const Gallary = ({ images }: images) => {
  const main = images[0];
  const small = images.slice(1, 5);
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2  gap-3">
      <img src={main} alt="image1" className="rounded-2xl row-span-2 w-full " />
      <div>
        <div className=" grid grid-cols-2 grid-rows-2 gap-3">
          {small.map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`image${index + 1}`}
              className="rounded-2xl"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallary;
