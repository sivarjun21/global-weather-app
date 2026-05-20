import { useState } from "react";

function useWeather() {

  // Current weather
  const [weather, setWeather] = useState(null);

  // 5-day forecast
  const [forecast, setForecast] = useState([]);

  // Loading state
  const [loading, setLoading] = useState(false);

  // Error state
  const [error, setError] = useState(null);

  // Fetch weather data
  const fetchWeather = async (cityName) => {

    if (!cityName) return;

    setLoading(true);

    setError(null);

    try {

      // Current Weather API
      const weatherResponse = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${
          import.meta.env.VITE_WEATHER_API_KEY
        }&units=metric`
      );

      if (!weatherResponse.ok) {
        throw new Error("City not found");
      }

      const weatherData = await weatherResponse.json();

      setWeather(weatherData);

      // Forecast API
      const forecastResponse = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${
          import.meta.env.VITE_WEATHER_API_KEY
        }&units=metric`
      );

      const forecastData = await forecastResponse.json();

      // Convert to daily forecast
      const dailyForecast = forecastData.list
        .filter((item, index) => index % 8 === 0)
        .slice(0, 5)
        .map((item) => ({
          day: new Date(item.dt_txt).toLocaleDateString("en-US", {
            weekday: "short",
          }),

          temp: item.main.temp,

          icon: item.weather[0].icon,

          condition: item.weather[0].main,
        }));

      setForecast(dailyForecast);

    } catch (err) {

      console.error(err);

      setError(err.message);

    } finally {

      setLoading(false);

    }
  };

  return {
    weather,
    forecast,
    loading,
    error,
    fetchWeather,
  };
}

export default useWeather;