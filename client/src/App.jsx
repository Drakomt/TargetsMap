// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import { useState } from "react";
import "./App.css";
import DropDown from "./components/DropDown/DropDown";
import Map from "./components/Map/Map";
import { data } from "../data";

function App() {
  const [imageSource, setImageSource] = useState("");
  const [selectedTarget, setSelectedTarget] = useState(null);
  const options = [
    {
      label: "Favela",
      onClick: () => {
        setImageSource(
          "https://www.hxchector.com/wp-content/uploads/2014/03/codmw2_Favela.jpg"
        );
        console.log("Favela");
      },
    },
    {
      label: "Afghan",
      onClick: () => {
        setImageSource(
          "https://www.hxchector.com/wp-content/uploads/2010/08/codmw2_Afghan.jpg"
        );
        console.log("Afghan");
      },
    },
    {
      label: "Derail",
      onClick: () => {
        setImageSource(
          "https://www.hxchector.com/wp-content/uploads/2014/03/codmw2_Derail.jpg"
        );
        console.log("Derail");
      },
    },
    {
      label: "Highrise",
      onClick: () => {
        setImageSource(
          "https://www.hxchector.com/wp-content/uploads/2014/03/codmw2_Highrise.jpg"
        );
        console.log("Highrise");
      },
    },
  ];

  const targets = [
    { x: 100, y: 200, name: "Target 1" },
    { x: 250, y: 300, name: "Target 2" },
    // Add more targets as needed
  ];

  const handleTargetClick = (name) => {
    setSelectedTarget(name);
    console.log("name: " + name);
    // You can implement logic to show more details about the selected target here
  };

  return (
    <div className="h-screen grid place-items-center bg-gradient-to-r from-sky-600 to-indigo-600">
      {/* <DropDown /> */}
      <DropDown options={options} />
      {/* <img src={imageSource} className="border-black" /> */}
      <Map
        mapImage={imageSource}
        targets={targets}
        onTargetClick={handleTargetClick}
      />
      {selectedTarget && (
        <div>
          <h2>Selected Target:</h2>
          <p>{selectedTarget}</p>
          {/* You can display more details about the selected target here */}
        </div>
      )}
    </div>
  );
}

export default App;
