"use client";

import React, { useEffect, useState } from "react";

interface CountdownTimerProps {
  className?: string;
}

const CountdownTimer: React.FC<CountdownTimerProps> = ({ className = "" }) => {
  const calculateTimeLeft = () => {
    const targetDate = new Date("2025-06-14T16:00:00");
    const now = new Date();
    const difference = +targetDate - +now;

    let timeLeft = {
      giorni: "00",
      ore: "00",
      minuti: "00",
      secondi: "00",
    };

    if (difference > 0) {
      timeLeft = {
        giorni: String(Math.floor(difference / (1000 * 60 * 60 * 24))).padStart(2, "0"),
        ore: String(Math.floor((difference / (1000 * 60 * 60)) % 24)).padStart(2, "0"),
        minuti: String(Math.floor((difference / 1000 / 60) % 60)).padStart(2, "0"),
        secondi: String(Math.floor((difference / 1000) % 60)).padStart(2, "0"),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className={className}>
      <div className="text-center">
        <p className="text-xl font-semibold">Save The Date!</p>
        <p className="text-sm">14 Giugno 2025 - 16:00</p>
      </div>

      <div className="flex gap-4">
        {Object.entries(timeLeft).map(([label, value]) => (
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
