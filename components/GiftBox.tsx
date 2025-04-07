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
    <div id={id} className={`w-full max-w-6xl mx-auto px-8 text-2xl ${className}`}>
      <div className="max-w-3xl mx-auto text-center py-12 font-serif text-[#8b8585]">
        <p className="text-lg italic">
          Il dono più grande che potete farci è la vostra presenza, ma se vi facesse piacere contribuire al nostro futuro insieme potete farlo qui.
        </p>

        {/* IBAN Box */}
        <div className="whitespace-nowrap bg-[#e5dfda] p-3 rounded-lg mt-6 shadow-md border border-gray-300">
          <div className="inline-flex items-center gap-3">
            <span className="text-sm sm:text-lg select-all">{iban}</span>
            <button onClick={handleCopy} className="text-xl shrink-0">
              <i className={`bi ${copied ? "bi-clipboard-check" : "bi-clipboard"}`}></i>
            </button>
          </div>
        </div>

        <p className="text-lg mt-2">Intestato a: {name}</p>
        <p className="text-sm italic mt-4">
          Grazie di cuore per il vostro affetto e la vostra generosità! ❤️
        </p>
      </div>
    </div>
  );
};

export default GiftBox;
