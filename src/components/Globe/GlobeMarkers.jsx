function GlobeMarkers({ cities, onCitySelect }) {

  return cities.map((city) => ({
    ...city,

    size: 0.4,

    color: "#00ffff",

    label: `
      <div style="
        background: rgba(0,0,0,0.75);
        padding: 8px 12px;
        border-radius: 8px;
        color: white;
        font-size: 14px;
        font-family: Arial;
      ">
        📍 ${city.name}
      </div>
    `,

    onClick: () => onCitySelect(city),
  }));
}

export default GlobeMarkers;