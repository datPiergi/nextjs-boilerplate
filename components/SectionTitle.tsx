"use client";

import React from "react";

interface SectionTitleProps {
  children: React.ReactNode;
  className?: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ children, className = "" }) => {
  return (
    <h2 className={`text-3xl font-semibold font-serif text-center text-gray-800 mb-6 ${className}`}>
      {children}
    </h2>
  );
};

export default SectionTitle;
