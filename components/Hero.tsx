"use client";

import React from "react";
import Image from "next/image";
import WeddingInvitationModal from "./WeddingInvitationModal";

const Hero: React.FC = () => {
  return (
    <div className="relative w-full h-screen flex flex-col items-center justify-center text-white text-center px-6">
      {/* Background Image */}
      <Image
        src="/hero-bg-extended.png"
        fill
        alt="Wedding background"
        style={{
          objectFit: 'cover',
          objectPosition: 'bottom',
          zIndex: -1,
        }}
        priority
      />

      {/* Overlay to Darken the Image */}
      <div className="absolute inset-0 bg-black/25"></div>

      {/* Text Content */}
      <div className="relative z-10">
        <span className="font-script text-9xl">Erika & Piergiorgio</span>
        <p className="text-2xl mt-4">Ci sposiamo! Unisciti a noi in questo giorno speciale.</p>
        <WeddingInvitationModal />
      </div>
    </div>
  );
};

export default Hero;
