import Target from "../Target/Target";

const Map = ({ mapImage, targets, onTargetClick }) => {
  const mapWidth = 800;
  const mapHeight = 600;

  return (
    <div className="relative">
      {mapImage && <img src={mapImage} alt="Map" />}
      {mapImage &&
        targets.map((target, index) => {
          const relativeX = (target.x / mapWidth) * 100; // Adjust as needed
          const relativeY = (target.y / mapHeight) * 100; // Adjust as needed

          return (
            <div
              key={index}
              className="target-tag"
              style={{
                position: "absolute",
                left: `${relativeX}%`, // Use relative coordinates
                top: `${relativeY}%`, // Use relative coordinates
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
