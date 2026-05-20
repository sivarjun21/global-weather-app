const BASE_URL = "https://api.openweathermap.org/data/2.5";

const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

/* ---------------- CURRENT WEATHER ---------------- */

export const getCurrentWeather = async (cityName) => {

  try {

    const response = await fetch(
      `${BASE_URL}/weather?q=${cityName}&appid=${API_KEY}&units=metric`
    );

    if (!response.ok) {
      throw new Error("Failed to fetch current weather");
    }

    const data = await response.json();

    return data;

  } catch (error) {

    console.error("Weather API Error:", error);

    throw error;
  }
};


/* ---------------- 5-DAY FORECAST ---------------- */

export const getForecast = async (cityName) => {

  try {

    const response = await fetch(
      `${BASE_URL}/forecast?q=${cityName}&appid=${API_KEY}&units=metric`
    );

    if (!response.ok) {
      throw new Error("Failed to fetch forecast");
    }

    const data = await response.json();

    // Convert 3-hour data into daily forecast
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

    return dailyForecast;

  } catch (error) {

    console.error("Forecast API Error:", error);

    throw error;
  }
};


/* ---------------- WEATHER BY COORDINATES ---------------- */

export const getWeatherByCoordinates = async (lat, lon) => {

  try {

    const response = await fetch(
      `${BASE_URL}/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    );

    if (!response.ok) {
      throw new Error("Failed to fetch coordinate weather");
    }

    const data = await response.json();

    return data;

  } catch (error) {

    console.error("Coordinate Weather Error:", error);

    throw error;
  }
};