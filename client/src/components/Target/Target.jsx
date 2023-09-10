import { TfiTarget } from "react-icons/tfi";
import React from "react"; // Import React

const Target = ({ x, y, name, onClick }) => {
  const handleClick = (event) => {
    event.stopPropagation(); // Stop event propagation
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
      }}
      onClick={handleClick}
    >
      <TfiTarget>{name}</TfiTarget>
    </div>
  );
};

export default Target;
