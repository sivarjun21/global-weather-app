import "./WeatherCard.css";

function WeatherCard({ weather }) {

  if (!weather) {
    return (
      <div className="weather-card empty-card">
        <h2>🌍 Select a city</h2>
        <p>Search or click a city on the globe</p>
      </div>
    );
  }

  return (
    <div className="weather-card">

      {/* City Name */}
      <h2 className="city-name">
        📍 {weather.customCityName || weather.name}
        <div className="weather-date">

          <p>{weather.currentDate}</p>

          <p>{weather.currentTime}</p>

        </div>
      </h2>

      {/* Weather Icon */}
      <div className="weather-icon">

        <img
          src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
          alt="weather-icon"
        />

      </div>

      {/* Temperature */}
      <h1 className="temperature">
        {Math.round(weather.main.temp)}°C
      </h1>

      {/* Weather Condition */}
      <p className="weather-condition">
        {weather.weather[0].main}
      </p>

      {/* Weather Details */}
      <div className="weather-details">

        <div className="detail-box">
          <span>💧 Humidity</span>
          <h3>{weather.main.humidity}%</h3>
        </div>

        <div className="detail-box">
          <span>🌬 Wind</span>
          <h3>{weather.wind.speed} m/s</h3>
        </div>

        <div className="detail-box">
          <span>🌡 Feels Like</span>
          <h3>{Math.round(weather.main.feels_like)}°C</h3>
        </div>

      </div>

    </div>
  );
}

export default WeatherCard;