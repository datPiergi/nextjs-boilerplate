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
          📍 Chiesa di San Matteo
          <br />
          Via Dei Perroni, 29 - Lecce
        </p>
      </div>

      {/* Right Side - Google Maps Image */}
      <div className="flex-1">
        <a
          href="https://www.google.com/maps/place/Chiesa+di+San+Matteo/@40.3505379,18.1691488,16z/data=!4m6!3m5!1s0x13442ee19038a189:0x14e5ab2a6c567ccf!8m2!3d40.3505379!4d18.1717237!16s%2Fg%2F122c65g7?entry=ttu&g_ep=EgoyMDI1MDMyNS4xIKXMDSoJLDEwMjExNjM5SAFQAw%3D%3D"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="/maps-location.jpg" // Replace with your Google Maps screenshot
            alt="Mappa della location"
            width={600}
            height={400}
            className="rounded-lg shadow-lg hover:opacity-80 transition"
          />
        </a>
      </div>
    </div>
  );
};

export default Location;
