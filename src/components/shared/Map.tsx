import React from "react";

type AddressMapProps = {
  mapSrc: string;
};

const AddressMap = ({ mapSrc }: AddressMapProps) => {
  return (
    <div className="google-map-code">
      <iframe
        src={mapSrc}
        className="w-full h-[721px] p-6"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="strict-origin-when-cross-origin"
      />
    </div>
  );
};

export { AddressMap };