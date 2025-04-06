"use client";

import React, { useEffect, useState } from "react";

const EventInfoCard: React.FC = () => {
    const [weather, setWeather] = useState<any>(null);
    const [error, setError] = useState(false);

    const apiKey = process.env.NEXT_PUBLIC_WEATHER_API_KEY;
    const lat = 40.3529;
    const lon = 18.1743;

    // Countdown logic
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

    // Fetch weather
    useEffect(() => {
        const fetchWeather = async () => {
            try {
                const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&lang=it&appid=${apiKey}`;
                const res = await fetch(url);
                const data = await res.json();
                if (res.ok && data.weather && data.main) {
                    setWeather(data);
                } else {
                    setError(true);
                }
            } catch {
                setError(true);
            }
        };

        fetchWeather();
    }, [apiKey]);

    const iconUrl = weather?.weather?.[0]?.icon
        ? `https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`
        : "";

    return (
        <div className="absolute top-full left-1/2 transform -translate-x-1/2 -translate-y-1/2
w-full max-w-4xl bg-white text-[#8b8585] rounded-2xl shadow-lg
px-4 sm:px-6 lg:px-8 py-6 flex flex-col lg:flex-row items-stretch gap-6 font-serif z-10">

            {/* Countdown */}
            <div className="flex flex-col items-center justify-center text-center flex-1">
                <p className="text-lg sm:text-xl mb-2">Mancano al nostro grande giorno</p>
                <div className="flex gap-4 justify-center">
                    {Object.entries(timeLeft).map(([label, value]) => (
                        <div className="text-center" key={label}>
                            <div className="text-2xl sm:text-3xl font-bold">{value}</div>
                            <p className="text-xs sm:text-sm capitalize">{label}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Divider */}
            <div className="hidden lg:block w-px bg-gray-300"></div>

            {/* Weather */}
            <div className="flex flex-col items-center justify-center text-center flex-1">
                <div className="text-lg sm:text-xl mb-2">Il meteo oggi a Lecce è:</div>
                {error ? (
                    <p className="text-sm text-gray-500">🌦️ Non disponibile</p>
                ) : !weather ? (
                    <p className="text-sm text-gray-500">Caricamento meteo...</p>
                ) : (
                    <div className="flex items-center justify-center gap-3">
                        <img src={iconUrl} alt="Icona meteo" className="w-14 h-14 sm:w-16 sm:h-16" />
                        <div className="text-left text-sm sm:text-base">
                            <p className="mb-0">{Math.round(weather.main.temp)}°C</p>
                            <p className="mb-0">Max {Math.round(weather.main.temp_max)}° / Min {Math.round(weather.main.temp_min)}°</p>
                            <p className="mb-0">Percepita: {Math.round(weather.main.feels_like)}°C</p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default EventInfoCard;
