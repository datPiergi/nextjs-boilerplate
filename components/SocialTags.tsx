"use client";

import React from "react";

const SocialTags: React.FC<{ className?: string }> = ({ className = "" }) => {
  return (
    <>
    <div className={`w-full text-center text-xl italic text-[#8b8585] ${className}`}>
      E non dimenticare di taggarci nelle tue foto con: 
    </div>
    <div className={`w-full text-center text-xl italic text-[#8b8585]`}>
      <strong>#eriepiergi</strong> @iclemyeri @datpiergi
    </div>
    </>
  );
};

export default SocialTags;
