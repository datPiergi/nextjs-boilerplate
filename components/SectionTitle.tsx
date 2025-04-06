"use client";

import React from "react";

interface SectionTitleProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ children, className = "", id }) => {
  return (
    <div id={id} className={`text-center ${className}`}>
      {children}
    </div>
  );
};

export default SectionTitle;
