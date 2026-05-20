import "./SpaceBackground.css";

function SpaceBackground() {

  return (

    <div className="space-background">

      {/* Stars Layer */}
      <div className="stars"></div>

      {/* Twinkling / Glow Layer */}
      <div className="twinkling"></div>

      {/* Extra Gradient Overlay */}
      <div className="space-gradient"></div>

    </div>

  );
}

export default SpaceBackground;