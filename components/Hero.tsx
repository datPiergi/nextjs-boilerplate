"use client";

import React from "react";
import Image from "next/image";
import WeddingInvitationModal from "./WeddingInvitationModal";
import { Rouge_Script } from 'next/font/google';
import CountdownTimer from "./CountdownTimer";
import WeatherWidget from "./WeatherWidget";


export const rougeScript = Rouge_Script({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-rouge-script",
});

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
      <div className="relative z-10 flex flex-col items-center gap-6">
        <span className="font-script text-9xl">Erika & Piergiorgio</span>
        <p className="text-2xl mt-4">Ci sposiamo! Unisciti a noi in questo giorno speciale.</p>
        <WeddingInvitationModal />
        <div className="mt-6 flex flex-col lg:flex-row items-center justify-center gap-6">
          <CountdownTimer className="w-full max-w-[320px] min-w-[280px] flex flex-col items-center justify-between border border-white rounded-2xl px-6 py-4 text-white font-serif flex-grow min-h-[218px]" />
          <WeatherWidget className="w-full max-w-[320px] min-w-[280px] flex flex-col items-center justify-between border border-white rounded-2xl px-6 py-4 text-white font-serif flex-grow min-h-[218px]" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
