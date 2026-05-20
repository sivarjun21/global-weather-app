/* ---------------- FORMAT TEMPERATURE ---------------- */

export const formatTemperature = (temp) => {

  if (temp === undefined || temp === null) {
    return "--°C";
  }

  return `${Math.round(temp)}°C`;

};


/* ---------------- FORMAT DATE ---------------- */

export const formatDate = (dateString) => {

  if (!dateString) return "";

  const date = new Date(dateString);

  return date.toLocaleDateString("en-US", {
    weekday: "short",
    month: "short",
    day: "numeric",
  });

};


/* ---------------- FORMAT FULL DATE ---------------- */

export const formatFullDate = (dateString) => {

  if (!dateString) return "";

  const date = new Date(dateString);

  return date.toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  });

};


/* ---------------- FORMAT TIME ---------------- */

export const formatTime = (timestamp) => {

  if (!timestamp) return "";

  const date = new Date(timestamp * 1000);

  return date.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
  });

};


/* ---------------- FORMAT WIND SPEED ---------------- */

export const formatWindSpeed = (speed) => {

  if (speed === undefined || speed === null) {
    return "-- km/h";
  }

  return `${(speed * 3.6).toFixed(1)} km/h`;

};


/* ---------------- FORMAT VISIBILITY ---------------- */

export const formatVisibility = (visibility) => {

  if (!visibility) return "-- km";

  return `${(visibility / 1000).toFixed(1)} km`;

};


/* ---------------- FORMAT PRESSURE ---------------- */

export const formatPressure = (pressure) => {

  if (!pressure) return "-- hPa";

  return `${pressure} hPa`;

};


/* ---------------- FORMAT HUMIDITY ---------------- */

export const formatHumidity = (humidity) => {

  if (humidity === undefined || humidity === null) {
    return "--%";
  }

  return `${humidity}%`;

};


/* ---------------- FORMAT COUNTRY ---------------- */

export const formatCountry = (country) => {

  if (!country) return "";

  return country.toUpperCase();

};


/* ---------------- FORMAT SUNRISE / SUNSET ---------------- */

export const formatSunTime = (timestamp) => {

  if (!timestamp) return "";

  const date = new Date(timestamp * 1000);

  return date.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
  });

};


/* ---------------- CAPITALIZE TEXT ---------------- */

export const capitalizeText = (text) => {

  if (!text) return "";

  return text
    .split(" ")
    .map(
      (word) =>
        word.charAt(0).toUpperCase() +
        word.slice(1)
    )
    .join(" ");

};