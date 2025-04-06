"use client";

import React, { useState } from "react";

interface GiftBoxProps {
  iban: string;
  name: string;
  id: string;
  className?: string;
}

const GiftBox: React.FC<GiftBoxProps> = ({ iban, name, id, className }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(iban);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div id={id} className={`w-full ${className} bg-[#F7E7CE] p-6 rounded-lg shadow-md max-w-3xl mx-auto text-center mb-8}`}>
      <h2 className="text-2xl font-bold text-gray-800">🎁 Un gesto d’amore</h2>
      <p className="text-lg text-gray-700 mt-3">
        Se desiderate farci un regalo, potete inviare un contributo al nostro IBAN:
      </p>

      {/* IBAN Box */}
      <div className="flex items-center justify-between bg-white p-3 rounded-lg mt-4 shadow-md border border-gray-300">
        <span className="text-lg font-mono text-gray-800 select-all">{iban}</span>
        <button onClick={handleCopy} className="ml-3 text-gray-600 hover:text-gray-800 text-xl">
          <i className={`bi ${copied ? "bi-clipboard-check" : "bi-clipboard"}`}></i>
        </button>
      </div>

      <p className="text-gray-600 mt-2">Intestato a: <strong>{name}</strong></p>
      <p className="text-sm text-gray-500 italic mt-4">
        Grazie di cuore per il vostro affetto e la vostra generosità! ❤️
      </p>
    </div>
  );
};

export default GiftBox;
