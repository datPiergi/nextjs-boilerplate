"use client";

import React from "react";

interface SectionDividerProps {
  className?: string;
}

const SectionDivider: React.FC<SectionDividerProps> = ({ className = "" }) => {
  return (
    <div className={`w-full border-t border-[#c4c4c4] ${className}`}></div>
  );
};

export default SectionDivider;
