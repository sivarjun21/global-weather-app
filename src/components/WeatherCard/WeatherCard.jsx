import "./WeatherCard.css";

function WeatherCard({ weather, unit }) {

  if (!weather) {

    return (

      <div className="weather-card empty-card">

        <h2>🌍 Select a city</h2>

        <p>Search or click a city on the globe</p>

      </div>

    );
  }

  /* ---------------- TEMPERATURE CONVERTER ---------------- */

  const convertTemp = (temp) => {

    if (unit === "F") {

      return Math.round((temp * 9) / 5 + 32);
    }

    return Math.round(temp);
  };


  return (

    <div className="weather-card">

      {/* ---------------- CITY NAME ---------------- */}

      <h2 className="city-name">

        📍 {weather.customCityName || weather.name},{" "}
        {weather.customCountry || weather.sys.country}

      </h2>


      {/* ---------------- DATE & TIME ---------------- */}

      <div className="weather-date">

        <p>{weather.currentDate}</p>

        <p>{weather.currentTime}</p>

      </div>


      {/* ---------------- WEATHER ICON ---------------- */}

      <div className="weather-icon">

        <img
          src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
          alt="weather-icon"
        />

      </div>


      {/* ---------------- TEMPERATURE ---------------- */}

      <h1 className="temperature">

        {convertTemp(weather.main.temp)}°{unit}

      </h1>


      {/* ---------------- CONDITION ---------------- */}

      <p className="weather-condition">

        {weather.weather[0].main}

      </p>


      {/* ---------------- DETAILS ---------------- */}

      <div className="weather-details">

        {/* Humidity */}

        <div className="detail-box">

          <span>💧 Humidity</span>

          <h3>{weather.main.humidity}%</h3>

        </div>


        {/* Wind */}

        <div className="detail-box">

          <span>🌬 Wind</span>

          <h3>{weather.wind.speed} m/s</h3>

        </div>


        {/* Feels Like */}

        <div className="detail-box">

          <span>🌡 Feels Like</span>

          <h3>

            {convertTemp(weather.main.feels_like)}°{unit}

          </h3>

        </div>

      </div>

    </div>
  );
}

export default WeatherCard;