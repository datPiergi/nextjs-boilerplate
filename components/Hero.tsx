"use client";

import React from "react";
import Image from "next/image";

const Hero: React.FC = () => {
  return (
    <div className="relative w-full h-screen flex flex-col items-center justify-center text-white text-center px-6">
      {/* Background Image */}
      <Image
        src="/hero-bg.jpg"
        alt="Wedding background"
        layout="fill"
        objectFit="cover"
        quality={90}
        priority
        className="-z-10"
      />

      {/* Overlay to Darken the Image */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Text Content */}
      <div className="relative z-10">
        <h1 className="text-5xl font-bold">Erika & Piergiorgio</h1>
        <p className="text-lg mt-4">Ci sposiamo! Unisciti a noi in questo giorno speciale.</p>
      </div>
    </div>
  );
};

export default Hero;
