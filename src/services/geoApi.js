const GEO_BASE_URL = "https://api.openweathermap.org/geo/1.0";

const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

/* ---------------- SEARCH CITY BY NAME ---------------- */

export const searchCity = async (cityName) => {

  try {

    const response = await fetch(
      `${GEO_BASE_URL}/direct?q=${cityName}&limit=5&appid=${API_KEY}`
    );

    if (!response.ok) {
      throw new Error("Failed to fetch city data");
    }

    const data = await response.json();

    return data.map((city) => ({
      name: city.name,

      country: city.country,

      state: city.state || "",

      lat: city.lat,

      lng: city.lon,
    }));

  } catch (error) {

    console.error("Geo API Error:", error);

    throw error;
  }
};


/* ---------------- GET CITY FROM COORDINATES ---------------- */

export const getCityByCoordinates = async (lat, lon) => {

  try {

    const response = await fetch(
      `${GEO_BASE_URL}/reverse?lat=${lat}&lon=${lon}&limit=1&appid=${API_KEY}`
    );

    if (!response.ok) {
      throw new Error("Failed to fetch location data");
    }

    const data = await response.json();

    if (data.length === 0) {
      return null;
    }

    return {
      name: data[0].name,

      country: data[0].country,

      state: data[0].state || "",

      lat: data[0].lat,

      lng: data[0].lon,
    };

  } catch (error) {

    console.error("Reverse Geo API Error:", error);

    throw error;
  }
};


/* ---------------- GET USER LOCATION ---------------- */

export const getUserLocation = () => {

  return new Promise((resolve, reject) => {

    if (!navigator.geolocation) {

      reject(new Error("Geolocation is not supported"));

      return;
    }

    navigator.geolocation.getCurrentPosition(

      (position) => {

        resolve({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        });

      },

      (error) => {

        reject(error);

      }

    );

  });
};