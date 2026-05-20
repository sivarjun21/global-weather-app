import "./Loader.css";

function Loader() {

  return (
    <div className="loader-container">

      <div className="loader-glow"></div>

      <div className="loader-spinner"></div>

      <p className="loader-text">
        Loading Weather Data...
      </p>

    </div>
  );
}

export default Loader;