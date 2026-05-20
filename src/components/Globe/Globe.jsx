import { useRef, useEffect, useState } from "react";

import Globe from "react-globe.gl";

import "./Globe.css";

function GlobeComponent({ selectedCity, onCitySelect }) {

  const globeRef = useRef();

  const [labelData, setLabelData] = useState([]);

  /* ---------------- AUTO ROTATION ---------------- */

  useEffect(() => {

    if (!globeRef.current) return;

    const controls = globeRef.current.controls();

    controls.autoRotate = true;

    controls.autoRotateSpeed = 0.3;

    controls.enableDamping = true;

    controls.dampingFactor = 0.1;

  }, []);

  /* ---------------- MOVE TO SELECTED CITY ---------------- */

  useEffect(() => {

    if (!selectedCity || !globeRef.current) return;

    globeRef.current.pointOfView(
      {
        lat: selectedCity.lat,
        lng: selectedCity.lng,
        altitude: 1.8,
      },

      2000
    );

    /* Show label only for selected city */

    setLabelData([
      {
        lat: selectedCity.lat,
        lng: selectedCity.lng,
        text: `${selectedCity.name}, ${selectedCity.country}`,
      }
    ]);

  }, [selectedCity]);

  /* ---------------- CLICK ON EARTH ---------------- */

  const handleGlobeClick = async ({ lat, lng }) => {

  try {

    const response = await fetch(

      `https://api.openweathermap.org/geo/1.0/reverse?lat=${lat}&lon=${lng}&limit=1&appid=${
        import.meta.env.VITE_WEATHER_API_KEY
      }`

    );

    const data = await response.json();

    /* IMPORTANT FIX */

    if (!data || data.length === 0) {

      console.log("No city found");

      return;
    }

    const city = {

      name: data[0].name || "Unknown",

      country: data[0].country || "",

      lat,

      lng,
    };

    onCitySelect(city);

  } catch (error) {

    console.error("Globe click error:", error);

  }
};

  return (

    <div className="globe-wrapper">

      <Globe
        ref={globeRef}

        width={700}

        height={700}

        globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"

        backgroundColor="rgba(0,0,0,0)"

        showAtmosphere={true}

        atmosphereColor="#00bfff"

        atmosphereAltitude={0.18}

        /* CLICK ANYWHERE */
        onGlobeClick={handleGlobeClick}

        /* LABEL */
        labelsData={labelData}

        labelLat="lat"

        labelLng="lng"

        labelText="text"

        labelSize={1}

        labelDotRadius={0.3}

        labelColor={() => "white"}

        labelResolution={2}
      />

    </div>
  );
}

export default GlobeComponent;