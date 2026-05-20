import "./Forecast.css";

function Forecast({ forecast }) {

  if (!forecast || forecast.length === 0) {
    return null;
  }

  return (

    <div className="forecast-container">

      <h2 className="forecast-title">
        5-Day Forecast
      </h2>

      <div className="forecast-cards">

        {
          forecast.map((day, index) => (

            <div
              key={index}
              className="forecast-card"
            >

              <h3 className="forecast-day">
                {day.day}
              </h3>

              <img
                src={`https://openweathermap.org/img/wn/${day.icon}@2x.png`}
                alt="forecast-icon"
                className="forecast-icon"
              />

              <h2 className="forecast-temp">
                {Math.round(day.temp)}°C
              </h2>

              <p className="forecast-condition">
                {day.condition}
              </p>

            </div>

          ))
        }

      </div>

    </div>

  );
}

export default Forecast;