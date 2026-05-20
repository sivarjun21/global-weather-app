/* ---------------- WEATHER CONDITION COLORS ---------------- */

export const getWeatherColor = (condition) => {

  switch (condition?.toLowerCase()) {

    case "clear":
      return "#facc15";

    case "clouds":
      return "#94a3b8";

    case "rain":
      return "#38bdf8";

    case "drizzle":
      return "#7dd3fc";

    case "thunderstorm":
      return "#a855f7";

    case "snow":
      return "#e2e8f0";

    case "mist":
    case "fog":
    case "haze":
      return "#cbd5e1";

    default:
      return "#00ffff";
  }
};


/* ---------------- WEATHER BACKGROUND ---------------- */

export const getWeatherBackground = (condition) => {

  switch (condition?.toLowerCase()) {

    case "clear":
      return "linear-gradient(to bottom, #0f172a, #1e3a8a)";

    case "clouds":
      return "linear-gradient(to bottom, #1e293b, #334155)";

    case "rain":
      return "linear-gradient(to bottom, #0f172a, #1d4ed8)";

    case "thunderstorm":
      return "linear-gradient(to bottom, #111827, #4c1d95)";

    case "snow":
      return "linear-gradient(to bottom, #cbd5e1, #94a3b8)";

    case "mist":
    case "fog":
      return "linear-gradient(to bottom, #334155, #64748b)";

    default:
      return "linear-gradient(to bottom, #020617, #0f172a)";
  }
};


/* ---------------- UV INDEX LEVEL ---------------- */

export const getUVLevel = (uv) => {

  if (uv <= 2) {
    return "Low";
  }

  if (uv <= 5) {
    return "Moderate";
  }

  if (uv <= 7) {
    return "High";
  }

  if (uv <= 10) {
    return "Very High";
  }

  return "Extreme";
};


/* ---------------- AIR QUALITY LEVEL ---------------- */

export const getAirQualityLevel = (aqi) => {

  switch (aqi) {

    case 1:
      return "Good";

    case 2:
      return "Fair";

    case 3:
      return "Moderate";

    case 4:
      return "Poor";

    case 5:
      return "Very Poor";

    default:
      return "Unknown";
  }
};


/* ---------------- WEATHER ANIMATION TYPE ---------------- */

export const getWeatherAnimation = (condition) => {

  switch (condition?.toLowerCase()) {

    case "rain":
    case "drizzle":
      return "rain";

    case "snow":
      return "snow";

    case "thunderstorm":
      return "storm";

    case "clouds":
      return "clouds";

    case "clear":
      return "sun";

    default:
      return "default";
  }
};


/* ---------------- DAY OR NIGHT ---------------- */

export const isDayTime = (sunrise, sunset) => {

  const currentTime = Date.now() / 1000;

  return currentTime >= sunrise &&
         currentTime <= sunset;
};


/* ---------------- VISIBILITY FORMAT ---------------- */

export const formatVisibility = (visibility) => {

  return `${(visibility / 1000).toFixed(1)} km`;

};


/* ---------------- PRESSURE FORMAT ---------------- */

export const formatPressure = (pressure) => {

  return `${pressure} hPa`;

};


/* ---------------- HUMIDITY LEVEL ---------------- */

export const getHumidityLevel = (humidity) => {

  if (humidity < 30) {
    return "Low";
  }

  if (humidity < 60) {
    return "Moderate";
  }

  return "High";
};