import { TfiTarget } from "react-icons/tfi";
import React from "react"; // Import React

const Target = ({ x, y, name, onClick }) => {
  const handleClick = (event) => {
    event.stopPropagation();
    onClick(name);
  };

  return (
    <div
      className="target-tag"
      style={{
        position: "absolute",
        left: x,
        top: y,
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: "50%", // Add round border
        border: "2px solid black", // Add a black border
        width: "32px", // Adjust the size as needed
        height: "32px", // Adjust the size as needed
      }}
      onClick={handleClick}
    >
      <TfiTarget style={{ color: "red" }}>{name}</TfiTarget>
    </div>
  );
};

export default Target;
