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
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-20 pb-12">
        <div className="text-right">
          <h3 className="text-2xl font-semibold font-serif mb-3">Erika</h3>
          <p className="text-lg">📞 +39 340 979 1270</p>
          <p className="text-lg">📧 mazzeoeri@gmail.com</p>
        </div>
        <div className="text-left">
          <h3 className="text-2xl font-semibold font-serif mb-3">Piergiorgio</h3>
          <p className="text-lg">📞 +39 328 197 9424</p>
          <p className="text-lg">📧 piergipietra@gmail.com</p>
        </div>
      </div>
    </Container>
  );
};

export default ContactInfo;
