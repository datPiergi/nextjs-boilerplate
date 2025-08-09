"use client";

import React, { useEffect, useState } from "react";

interface CountdownTimerProps {
  className?: string;
}

const CountdownTimer: React.FC<CountdownTimerProps> = ({ className = "" }) => {
  const calculateTimeSince = () => {
    const targetDate = new Date("2025-06-14T16:00:00");
    const now = new Date();
    const difference = +now - +targetDate; // time since targetDate in ms

    let timePassed = {
      giorni: "00",
      ore: "00",
      minuti: "00",
      secondi: "00",
    };

    if (difference > 0) {
      timePassed = {
        giorni: String(Math.floor(difference / (1000 * 60 * 60 * 24))).padStart(2, "0"),
        ore: String(Math.floor((difference / (1000 * 60 * 60)) % 24)).padStart(2, "0"),
        minuti: String(Math.floor((difference / (1000 * 60)) % 60)).padStart(2, "0"),
        secondi: String(Math.floor((difference / 1000) % 60)).padStart(2, "0"),
      };
    }

    return timePassed;
  };

  const [timePassed, setTimePassed] = useState(calculateTimeSince());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimePassed(calculateTimeSince());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className={`w-full max-w-[320px] min-w-[280px] flex flex-col items-center border border-white rounded-2xl px-6 py-4 text-white font-serif ${className}`}>
      <div className="text-center mb-3">
        <p className="text-xl font-semibold">Tempo trascorso dal matrimonio</p>
        <p className="text-sm">Dal 14 Giugno 2025 - 16:00</p>
      </div>

      <div className="flex gap-4">
        {Object.entries(timePassed).map(([label, value]) => (
          <div className="text-center" key={label}>
            <p className="text-3xl font-bold">{value}</p>
            <p className="text-sm capitalize">{label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CountdownTimer;