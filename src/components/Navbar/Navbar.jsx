import "./Navbar.css";

function Navbar() {

  return (
    <nav className="navbar">

      {/* Logo / Title */}
      <div className="navbar-logo">

        <h1>
          🌍 Global Weather
        </h1>

      </div>

      {/* Navigation Links */}
      <div className="navbar-links">

        <a href="#">
          Home
        </a>

        <a href="#">
          Forecast
        </a>

        <a href="#">
          About
        </a>

      </div>

    </nav>
  );
}

export default Navbar;