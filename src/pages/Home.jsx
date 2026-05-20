import { useState } from "react";

import GlobeComponent from "../components/Globe/Globe";
import SearchBar from "../components/SearchBar/SearchBar";
import WeatherCard from "../components/WeatherCard/WeatherCard";
import Forecast from "../components/Forecast/Forecast";
import Loader from "../components/Loader/Loader";
import Navbar from "../components/Navbar/Navbar";
import SpaceBackground from "../components/Background/SpaceBackground";

function Home() {

  /* ---------------- STATES ---------------- */

  const [selectedCity, setSelectedCity] = useState(null);

  const [weather, setWeather] = useState(null);

  const [forecast, setForecast] = useState([]);

  const [loading, setLoading] = useState(false);


  /* ---------------- HANDLE CITY ---------------- */

  const handleCitySelect = async (city) => {

    if (!city) return;

    setSelectedCity(city);

    setLoading(true);

    try {

      /* ---------------- CURRENT WEATHER ---------------- */

      const weatherResponse = await fetch(

        `https://api.openweathermap.org/data/2.5/weather?lat=${city.lat}&lon=${city.lng}&appid=${
          import.meta.env.VITE_WEATHER_API_KEY
        }&units=metric`

      );

      const weatherData = await weatherResponse.json();


      /* ---------------- CITY LOCAL TIME ---------------- */

      const timezoneOffset = weatherData.timezone;

      // UTC time
      const utc =
        new Date().getTime() +
        new Date().getTimezoneOffset() * 60000;

      // City local time
      const cityTime = new Date(
        utc + timezoneOffset * 1000
      );


      /* ---------------- SET WEATHER ---------------- */

      setWeather({

        ...weatherData,

        customCityName: city.name,

        customCountry: city.country,

        currentDate: cityTime.toLocaleDateString(
          "en-US",
          {
            weekday: "short",
            year: "numeric",
            month: "short",
            day: "numeric",
          }
        ),

        currentTime: cityTime.toLocaleTimeString(
          "en-US",
          {
            hour: "2-digit",
            minute: "2-digit",
          }
        ),
      });


      /* ---------------- FORECAST ---------------- */

      const forecastResponse = await fetch(

        `https://api.openweathermap.org/data/2.5/forecast?lat=${city.lat}&lon=${city.lng}&appid=${
          import.meta.env.VITE_WEATHER_API_KEY
        }&units=metric`

      );

      const forecastData = await forecastResponse.json();


      /* ---------------- DAILY FORECAST ---------------- */

      const uniqueDays = {};

      const today = cityTime.toLocaleDateString(
        "en-US",
        {
          weekday: "short",
        }
      );

      forecastData.list.forEach((item) => {

        const itemDate = new Date(item.dt_txt);

        const dayName = itemDate.toLocaleDateString(
          "en-US",
          {
            weekday: "short",
          }
        );

        // Skip today's forecast
        if (dayName === today) return;

        // Keep only first forecast of each day
        if (!uniqueDays[dayName]) {

          uniqueDays[dayName] = {

            day: dayName,

            temp: Math.round(item.main.temp),

            icon: item.weather[0].icon,

            condition: item.weather[0].main,

          };
        }

      });

      const dailyForecast =
        Object.values(uniqueDays).slice(0, 5);

      setForecast(dailyForecast);

    } catch (error) {

      console.error("Weather Fetch Error:", error);

    } finally {

      setLoading(false);

    }
  };
  

  return (

    <div className="home-page">

      {/* ---------------- BACKGROUND ---------------- */}

      <SpaceBackground />


      {/* ---------------- NAVBAR ---------------- */}

      <Navbar />


      {/* ---------------- SEARCH BAR ---------------- */}

      <SearchBar
        onCitySelect={handleCitySelect}
      />


      {/* ---------------- GLOBE ---------------- */}

      <GlobeComponent
        selectedCity={selectedCity}
        onCitySelect={handleCitySelect}
      />


      {/* ---------------- LOADER ---------------- */}

      {
        loading && <Loader />
      }


      {/* ---------------- WEATHER CARD ---------------- */}

      <WeatherCard weather={weather} />


      {/* ---------------- FORECAST ---------------- */}

      <Forecast forecast={forecast} />

    </div>
  );
}

export default Home;