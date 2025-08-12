"use client";

import React from "react";
import { Container } from "react-bootstrap";

interface ContactInfoProps {
  id: string;
  className?: string;
}

const ContactInfo: React.FC<ContactInfoProps> = ({ id, className }) => {
  return (
    <Container
      id={id}
      className={`w-full max-w-6xl mx-auto px-8 text-2xl border-y border-[#c4c4c4] ${className}`}
    >
      <h2 className="text-3xl font-serif font-semibold text-center py-12">Contatti</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-20 pb-12 justify-items-center sm:justify-items-stretch text-center sm:text-left">
        <div className="sm:text-right">
          <h3 className="text-2xl font-semibold font-serif mb-3">Erika</h3>
          <p className="text-lg">📞 </p>
          <p className="text-lg">📧 </p>
        </div>
        <div className="sm:text-left">
          <h3 className="text-2xl font-semibold font-serif mb-3">Piergiorgio</h3>
          <p className="text-lg">📞 </p>
          <p className="text-lg">📧 </p>
        </div>
      </div>
    </Container>
  );
};

export default ContactInfo;
