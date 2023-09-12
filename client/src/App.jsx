// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import { useState } from "react";
import "./App.css";
import DropDown from "./components/DropDown/DropDown";
import Map from "./components/Map/Map";
import { data } from "../data";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
  // const [imageSource, setImageSource] = useState("");
  // const [selectedTarget, setSelectedTarget] = useState(null);
  // const [selectedMap, setSelectedMap] = useState(null);

  // const options = [
  //   {
  //     label: "Favela",
  //     onClick: () => {
  //       setImageSource(
  //         "https://www.hxchector.com/wp-content/uploads/2014/03/codmw2_Favela.jpg"
  //       );
  //       setSelectedMap("Favela");
  //       console.log("Favela");
  //     },
  //   },
  //   {
  //     label: "Afghan",
  //     onClick: () => {
  //       setImageSource(
  //         "https://www.hxchector.com/wp-content/uploads/2010/08/codmw2_Afghan.jpg"
  //       );
  //       setSelectedMap("Afghan");
  //       console.log("Afghan");
  //     },
  //   },
  //   {
  //     label: "Derail",
  //     onClick: () => {
  //       setImageSource(
  //         "https://www.hxchector.com/wp-content/uploads/2014/03/codmw2_Derail.jpg"
  //       );
  //       setSelectedMap("Derail");
  //       console.log("Derail");
  //     },
  //   },
  //   {
  //     label: "Highrise",
  //     onClick: () => {
  //       setImageSource(
  //         "https://www.hxchector.com/wp-content/uploads/2014/03/codmw2_Highrise.jpg"
  //       );
  //       setSelectedMap("Highrise");
  //       console.log("Highrise");
  //     },
  //   },
  // ];

  // const targets = [
  //   { x: 100, y: 200, name: "Target 1", map: "Favela" },
  //   { x: 250, y: 300, name: "Target 2", map: "Favela" },
  //   { x: 300, y: 100, name: "Target 3", map: "Afghan" },
  //   { x: 200, y: 250, name: "Target 4", map: "Afghan" },
  //   { x: 60, y: 50, name: "Target 5", map: "Derail" },
  //   { x: 150, y: 10, name: "Target 6", map: "Derail" },
  //   { x: 300, y: 20, name: "Target 7", map: "Highrise" },
  //   { x: 170, y: 260, name: "Target 8", map: "Highrise" },
  // ];

  // const handleTargetClick = (name) => {
  //   setSelectedTarget(name);
  //   console.log("name: " + name);
  // };

  // const filteredTargets = targets.filter(
  //   (target) => target.map === selectedMap
  // );

  // return (
  //   <div className="h-screen grid place-items-center bg-gradient-to-r from-sky-600 to-indigo-600">
  //     <DropDown options={options} />
  //     <Map
  //       mapImage={imageSource}
  //       targets={filteredTargets}
  //       onTargetClick={handleTargetClick}
  //     />
  //     {selectedTarget && (
  //       <div>
  //         <h2>Selected Target:</h2>
  //         <p>{selectedTarget}</p>
  //       </div>
  //     )}
  //   </div>
  // );
}

export default App;
