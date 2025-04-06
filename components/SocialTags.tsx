"use client";

import React from "react";

const SocialTags: React.FC<{ className?: string }> = ({ className = "" }) => {
  return (
    <div className={`w-full text-center font-serif italic text-xl text-[#8b8585] ${className}`}>
      Taggaci nelle tue foto con: <strong>#eriepiergi</strong> @iclemyeri @datpiergi
    </div>
  );
};

export default SocialTags;
