import { useState } from "react";

import "./SearchBar.css";

function SearchBar({ onCitySelect }) {

  const [query, setQuery] = useState("");

  const [suggestions, setSuggestions] = useState([]);

  /* ---------------- FETCH CITIES ---------------- */

  const fetchCities = async (value) => {

    setQuery(value);

    if (value.length < 2) {

      setSuggestions([]);

      return;
    }

    try {

      const response = await fetch(

        `https://api.openweathermap.org/geo/1.0/direct?q=${value}&limit=5&appid=${
          import.meta.env.VITE_WEATHER_API_KEY
        }`

      );

      const data = await response.json();

      setSuggestions(data);

    } catch (error) {

      console.error("Autocomplete Error:", error);

    }
  };

  /* ---------------- SELECT CITY ---------------- */

  const handleSelect = (city) => {

    const selectedCity = {

      name: city.name,

      country: city.country,

      lat: city.lat,

      lng: city.lon,
    };

    onCitySelect(selectedCity);

    setQuery(`${city.name}, ${city.country}`);

    setSuggestions([]);
  };

  return (

    <div className="search-wrapper">

      <div className="search-bar">

        <input
          type="text"

          placeholder="Search any city..."

          value={query}

          onChange={(e) => fetchCities(e.target.value)}

          onKeyDown={(e) => {

            if (e.key === "Enter") {

              if (suggestions.length > 0) {

                handleSelect(suggestions[0]);
              }
            }
        }}
        />

        <button>
          Search
        </button>

      </div>

      {/* Suggestions */}

      {
        suggestions.length > 0 && (

          <div className="suggestions-box">
            
            {
              suggestions.map((city, index) => (

                <div
                  key={index}

                  className="suggestion-item"

                  onClick={() => handleSelect(city)}
                >

                  {city.name}, {city.country}

                </div>

              ))
            }

          </div>

        )
      }

    </div>
  );
}

export default SearchBar;