"use client";

import React from "react";
import Image from "next/image";
import WeddingInvitationModal from "./WeddingInvitationModal";

const Hero: React.FC = () => {
  return (
    <div className="relative w-full h-screen flex flex-col items-center  justify-start sm:justify-center text-white text-center px-6 pt-32 sm:pt-0">
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
      <div className="absolute inset-0 bg-black/30 sm:bg-black/25"></div>

      {/* Text Content */}
      <div className="relative z-10 flex flex-col items-center gap-6">
        <span className="font-script text-5xl sm:text-6xl md:text-8xl lg:text-9xl" style={{ fontFamily: 'var(--font-rouge-script)' }}>Erika & Piergiorgio</span>
        <p className="text-xl sm:text-2xl sm:mt-4">Ci sposiamo! E non vediamo l'ora di festeggiare con voi</p>
        <WeddingInvitationModal />
      </div>
    </div>
  );
};

export default Hero;
