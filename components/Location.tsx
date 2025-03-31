"use client";

import React from "react";
import Image from "next/image";

const Location: React.FC = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-center w-full max-w-6xl mx-auto py-16 px-6 gap-8">
      {/* Left Side - Address */}
      <div className="flex-1 text-center lg:text-left">
        <h2 className="text-3xl font-bold">Dove si svolgerà</h2>
        <p className="text-lg mt-4">
          📍 Villa dei Sogni  
          <br />
          Via delle Stelle, 12  
          <br />
          00100, Roma, Italia
        </p>
      </div>

      {/* Right Side - Google Maps Image */}
      <div className="flex-1">
        <Image
          src="/maps-location.jpg" // Replace with your Google Maps image
          alt="Mappa della location"
          width={600}
          height={400}
          className="rounded-lg shadow-lg"
        />
      </div>
    </div>
  );
};

export default Location;
