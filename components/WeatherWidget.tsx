"use client";

import React, { useEffect, useState } from "react";

interface WeatherWidgetProps {
  className?: string;
}

const WeatherWidget: React.FC<WeatherWidgetProps> = ({ className = "" }) => {
  const [weather, setWeather] = useState<any>(null);
  const [error, setError] = useState(false);

  const apiKey = process.env.NEXT_PUBLIC_WEATHER_API_KEY;
  const lat = 40.3529;
  const lon = 18.1743;

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

  if (error) {
    return (
      <div className={className}>
        <p>🌦️ Meteo non disponibile</p>
      </div>
    );
  }

  if (!weather) {
    return (
      <div className={className}>
        <p>Caricamento meteo...</p>
      </div>
    );
  }

  const iconUrl = `https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`;

  return (
    <div className={className}>
      <p className="text-xl font-semibold mb-3 text-center">Il meteo oggi a Lecce è:</p>

      <div className="flex items-center gap-3">
        <img
          src={iconUrl}
          alt={weather.weather[0].description}
          className="w-16 h-16"
        />
        <div className="text-left">
          <p className="capitalize text-sm">{weather.weather[0].description}</p>
          <p className="text-lg font-bold">{Math.round(weather.main.temp)}°C</p>
          <p className="text-xs">
            Max {Math.round(weather.main.temp_max)}° / Min {Math.round(weather.main.temp_min)}°
          </p>
        </div>
      </div>
    </div>
  );
};

export default WeatherWidget;
