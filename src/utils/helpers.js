/* ---------------- FORMAT TEMPERATURE ---------------- */

export const formatTemperature = (temp) => {

  return `${Math.round(temp)}°C`;

};


/* ---------------- FORMAT DATE ---------------- */

export const formatDate = (dateString) => {

  const date = new Date(dateString);

  return date.toLocaleDateString("en-US", {
    weekday: "short",
    month: "short",
    day: "numeric",
  });

};


/* ---------------- FORMAT TIME ---------------- */

export const formatTime = (timestamp) => {

  const date = new Date(timestamp * 1000);

  return date.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
  });

};


/* ---------------- WEATHER ICON URL ---------------- */

export const getWeatherIcon = (iconCode) => {

  return `https://openweathermap.org/img/wn/${iconCode}@2x.png`;

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


/* ---------------- CONVERT M/S TO KM/H ---------------- */

export const convertWindSpeed = (speed) => {

  return (speed * 3.6).toFixed(1);

};


/* ---------------- GET DAY NAME ---------------- */

export const getDayName = (dateString) => {

  const date = new Date(dateString);

  return date.toLocaleDateString("en-US", {
    weekday: "long",
  });

};


/* ---------------- RANDOM STAR POSITION ---------------- */

export const randomPosition = () => {

  return {
    top: `${Math.random() * 100}%`,
    left: `${Math.random() * 100}%`,
  };

};


/* ---------------- CHECK MOBILE DEVICE ---------------- */

export const isMobile = () => {

  return window.innerWidth <= 768;

};