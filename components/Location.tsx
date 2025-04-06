"use client";

import React from "react";
import Image from "next/image";

interface LocationProps {
  imageLeft?: boolean; // If true, the image will be on the left
  title: string;
  address: string;
  mapLink: string;
  imageSrc: string;
  id: string;
  className?: string;
}

const Location: React.FC<LocationProps> = ({
  imageLeft = false,
  title,
  address,
  mapLink,
  imageSrc,
  id,
  className
}) => {
  return (
    <div 
      id={id}
      className={`w-full ${className} flex flex-col lg:flex-row items-center justify-center w-full mx-auto gap-8 ${imageLeft ? "lg:flex-row-reverse" : ""
        }`}
    >
      {/* Address */}
      <div className="flex-[1] text-center lg:text-left">
        <h2 className="text-3xl font-bold">{title}</h2>
        <p className="text-lg mt-4">{address}</p>
      </div>

      {/* Clickable Google Maps Image */}
      <div className="flex-[3] flex flex-col items-center">
        <a href={mapLink} target="_blank" rel="noopener noreferrer" className="block">
          <Image
            src={imageSrc}
            alt={`Mappa di ${title}`}
            width={1200}
            height={900}
            className="rounded-lg shadow-lg hover:opacity-80 transition"
          />
        </a>

        {/* Caption below the image */}
        <p className="text-sm text-gray-600 mt-2">
          Per vedere la strada clicca sull'immagine
        </p>
      </div>
    </div>
  );
};

export default Location;
