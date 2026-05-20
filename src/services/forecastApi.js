const BASE_URL = "https://api.openweathermap.org/data/2.5";

const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

/* ---------------- GET 5-DAY FORECAST ---------------- */

export const fetchForecast = async (cityName) => {

  try {

    const response = await fetch(
      `${BASE_URL}/forecast?q=${cityName}&appid=${API_KEY}&units=metric`
    );

    if (!response.ok) {
      throw new Error("Failed to fetch forecast data");
    }

    const data = await response.json();

    // Convert 3-hour interval forecast into daily forecast
    const dailyForecast = data.list
      .filter((item, index) => index % 8 === 0)
      .slice(0, 5)
      .map((item) => ({

        day: new Date(item.dt_txt).toLocaleDateString(
          "en-US",
          {
            weekday: "short",
          }
        ),

        date: new Date(item.dt_txt).toLocaleDateString(
          "en-US",
          {
            month: "short",
            day: "numeric",
          }
        ),

        temp: item.main.temp,

        minTemp: item.main.temp_min,

        maxTemp: item.main.temp_max,

        humidity: item.main.humidity,

        icon: item.weather[0].icon,

        condition: item.weather[0].main,

        description: item.weather[0].description,

        windSpeed: item.wind.speed,

      }));

    return dailyForecast;

  } catch (error) {

    console.error("Forecast API Error:", error);

    throw error;
  }
};