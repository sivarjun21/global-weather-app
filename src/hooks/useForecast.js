import { useState } from "react";

function useForecast() {

  // Forecast state
  const [forecast, setForecast] = useState([]);

  // Loading state
  const [loading, setLoading] = useState(false);

  // Error state
  const [error, setError] = useState(null);

  // Fetch forecast data
  const fetchForecast = async (cityName) => {

    if (!cityName) return;

    setLoading(true);

    setError(null);

    try {

      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${
          import.meta.env.VITE_WEATHER_API_KEY
        }&units=metric`
      );

      if (!response.ok) {
        throw new Error("Forecast data not found");
      }

      const data = await response.json();

      // Convert 3-hour interval data into daily forecast
      const dailyForecast = data.list
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
    forecast,
    loading,
    error,
    fetchForecast,
  };
}

export default useForecast;