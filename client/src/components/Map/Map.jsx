import Target from "../Target/Target";
import "./Map.css";

const Map = ({ mapImage, targets, onTargetClick }) => {
  const mapWidth = 800;
  const mapHeight = 600;

  return (
    <div className="map-container">
      {mapImage && <img src={mapImage} alt="Map" />}
      {mapImage &&
        targets.map((target, index) => {
          const relativeX = (target.x / mapWidth) * 100; // Adjust as needed
          const relativeY = (target.y / mapHeight) * 100; // Adjust as needed

          return (
            <div
              key={index}
              style={{
                position: "absolute",
                left: target.x,
                top: target.y,
              }}
              onClick={() => onTargetClick(target)}
            >
              <Target
                x={relativeX}
                y={relativeY}
                name={target.name}
                onClick={onTargetClick}
              />
            </div>
          );
        })}
    </div>
  );
};

export default Map;
