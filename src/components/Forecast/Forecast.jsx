import "./Forecast.css";

function Forecast({ forecast, unit }) {

  if (!forecast || forecast.length === 0) {

    return null;
  }

  /* ---------------- TEMPERATURE CONVERTER ---------------- */

  const convertTemp = (temp) => {

    if (unit === "F") {

      return Math.round((temp * 9) / 5 + 32);
    }

    return Math.round(temp);
  };


  return (

    <div className="forecast-container">

      {/* ---------------- TITLE ---------------- */}

      <h2 className="forecast-title">

        5-Day Forecast

      </h2>


      {/* ---------------- FORECAST CARDS ---------------- */}

      <div className="forecast-cards">

        {
          forecast.map((day, index) => (

            <div
              key={index}
              className="forecast-card"
            >

              {/* Day */}

              <h3 className="forecast-day">

                {day.day}

              </h3>


              {/* Weather Icon */}

              <img
                src={`https://openweathermap.org/img/wn/${day.icon}@2x.png`}
                alt="forecast-icon"
                className="forecast-icon"
              />


              {/* Temperature */}

              <h2 className="forecast-temp">

                {convertTemp(day.temp)}°{unit}

              </h2>


              {/* Condition */}

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