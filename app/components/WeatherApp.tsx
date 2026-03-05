'use client';

import { useState, useEffect, useCallback } from 'react';

interface WeatherData {
  name: string;
  main: {
    temp: number;
    humidity: number;
  };
  wind: {
    speed: number;
  };
  weather: Array<{
    icon: string;
  }>;
}

export default function WeatherApp() {
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [searchInput, setSearchInput] = useState('');

  const checkWeather = useCallback(async (city: string) => {
    if (!city.trim()) {
      setError('Please enter a city name');
      return;
    }

    setLoading(true);
    setError('');

    try {
      const response = await fetch(`/api/weather?city=${encodeURIComponent(city)}`);

      if (!response.ok) {
        throw new Error('City not found');
      }

      const data: WeatherData = await response.json();
      setWeather(data);
      setSearchInput('');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to fetch weather data');
      setWeather(null);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    checkWeather('Lahore');
  }, [checkWeather]);

  const handleSearch = () => {
    checkWeather(searchInput);
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      checkWeather(searchInput);
    }
  };

  // Wind speed: API returns m/s, display km/h (× 3.6)
  const windKmh = weather ? (weather.wind.speed * 3.6).toFixed(1) : '—';

  return (
    <div
      className="w-full min-h-screen flex flex-col md:flex-row items-center justify-center md:justify-between gap-6 md:gap-0 py-6 md:py-0 relative overflow-x-hidden overflow-y-auto"
    >
      {/* Left Section - Branding */}
      <div
        className="w-full md:w-1/2 flex flex-col items-center md:items-start justify-center relative order-2 md:order-1 md:ml-12"
      >
        <h1
          className="text-white mb-4  md:mb-6 text-center md:text-left whitespace-nowrap"
          style={{
            fontSize: 'clamp(24px, 8vw, 62px)',
            fontFamily: 'Georgia, serif',
            fontWeight: 600,
            lineHeight: 1,
            justifyContent: 'center',
            alignItems: 'center',
            display: 'flex',
            flexDirection: 'column',
            textAlign: 'center',
            marginTop: '2rem',
            marginBottom: '2rem',
            marginLeft: '2rem',
            marginRight: '2rem',
          }}
        >
          Weather App
        </h1>

        <div
          className="flex items-baseline gap-2 mb-6 md:mb-12 w-full"
          style={{
            fontSize: 'clamp(20px, 4vw, 44px)',
            fontFamily: 'Georgia, serif',
            marginTop: '2rem',
            justifyContent: 'center',
          }}
        >
          <span className="text-white">Using</span>
          <span style={{ color: '#2DE0A1' }}>Javascript</span>
        </div>

        <img
          src="/Capture2.png"
          alt=""
          className="self-center mt-2 md:mt-4 w-32 h-32 sm:w-40 sm:h-40 md:w-72 md:h-72 object-contain"
        />
      </div>

      {/* Right Section - Weather Widget */}
      <div
        className="w-full max-w-[380px] md:max-w-none md:w-[380px] flex flex-col flex-shrink-0 self-center order-1 md:order-2 rounded-2xl md:rounded-none overflow-hidden p-5 pt-12 pb-5 md:pt-14 md:px-8 md:pb-8 min-h-[440px] md:min-h-[500px] h-[440px] md:h-[500px]"
        style={{ backgroundColor: '#3e5373' }}
      >
        {/* Search Bar */}
        <div
          className="flex gap-1.5 md:gap-2 mb-6 md:mb-10 px-0 md:px-2 min-w-0 justify-center"
          style={{ marginTop: '2.5rem' }}
        >
          <div className="flex gap-1.5 md:gap-2 min-w-0 w-full max-w-[280px] md:max-w-[260px]">
            <input
              type="text"
              placeholder=" Enter city name "
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
              onKeyPress={handleKeyPress}
              className="flex-1 min-w-0 rounded-full bg-white text-gray-800 focus:outline-none placeholder-gray-600"
              style={{ fontSize: '13px', padding: '8px 14px' }}
            />
            <button
              type="button"
              onClick={handleSearch}
              disabled={loading}
              className="flex-shrink-0 flex items-center justify-center cursor-pointer transition-transform hover:scale-105 disabled:opacity-60 w-8 h-8 md:w-9 md:h-9 rounded-full"
              style={{
                backgroundColor: '#ffffff',
              }}
              aria-label="Search"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#000000"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="11" cy="11" r="8" />
                <path d="m21 21-4.35-4.35" />
              </svg>
            </button>
          </div>
        </div>

        {error && (
          <div
            className="mb-6 rounded-2xl border border-white/20 overflow-hidden"
            style={{
              background: 'linear-gradient(135deg, rgba(220, 38, 38, 0.15) 0%, rgba(185, 28, 28, 0.25) 100%)',
              boxShadow: '0 4px 20px rgba(0, 0, 0, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
            }}
          >
            <div className="flex items-center gap-3 md:gap-4 px-4 md:px-5 py-3 md:py-4">
              <div
                className="flex-shrink-0 flex items-center justify-center rounded-full"
                style={{
                  width: 44,
                  height: 44,
                  background: 'rgba(220, 38, 38, 0.3)',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                }}
              >
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="rgba(254, 226, 226, 0.95)"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 8v4" />
                  <path d="M12 16h.01" />
                </svg>
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-white font-semibold text-sm tracking-tight">
                  {error === 'City not found' ? "City not found" : error}
                </p>
                <p className="text-white/80 text-xs mt-0.5">
                  {error === 'City not found'
                    ? "Try another city name or check the spelling."
                    : "Please try again."}
                </p>
              </div>
            </div>
          </div>
        )}

        {loading && (
          <div className="text-white/90 text-center py-12 text-lg">Loading...</div>
        )}

        {weather && !loading && (
          <div className="flex flex-col flex-1 min-h-0">
            <div className="text-center flex-shrink-0 pt-4 md:pt-7">
              {/* Weather Icon */}
              <div className="flex justify-center mb-4 md:mb-6" style={{ marginTop: 20 }}>
                <img
                  src="/Capture1.png"
                  alt=""
                  className="w-[160px] sm:w-[200px] md:w-[220px] h-auto object-contain"
                />
              </div>

              {/* Temperature */}
              <div
                className="text-white font-bold mb-2 text-[40px] md:text-[48px]"
                style={{ lineHeight: 1, fontFamily: 'sans-serif' }}
              >
                {Math.round(weather.main.temp)} °c
              </div>

              {/* City Name - serif */}
              <div
                className="text-white font-bold mb-8 md:mb-10"
                style={{
                  fontFamily: 'Georgia, serif',
                  fontSize: '38px',
                  marginTop: '24px',
                }}
              >
                {weather.name}
              </div>
            </div>

            {/* Spacer: fills space so bar sits at bottom with gap above */}
            <div className="flex-1 min-h-[32px]" />
            {/* Bottom stats bar */}
            <div className="-mx-5 md:-mx-8 bg-[#354666] rounded-b-2xl pt-4 pb-3 md:pt-5 md:pb-4 px-5 md:px-8 flex">
              <div className="flex-1 text-center">
                <div className="text-white text-xs font-medium mb-1">Humidity</div>
                <div className="text-white text-sm font-medium">
                  {weather.main.humidity}%
                </div>
              </div>
              <div className="w-px bg-white/60" />
              <div className="flex-1 text-center">
                <div className="text-white text-xs font-medium mb-1">Wind Speed</div>
                <div className="text-white text-sm font-medium">{windKmh} km/h</div>
              </div>
            </div>
          </div>
        )}

        {!weather && !loading && !error && (
          <div className="text-white/60 text-center py-10 md:py-16 text-sm md:text-base">
            Search for a city to see weather
          </div>
        )}
      </div>
    </div>
  );
}
