import { useState } from "react";
import DropDown from "../../components/DropDown/DropDown";
import Map from "../../components/Map/Map";
import "./HomePage.css";
import NavBar from "../../components/NavBar/NavBar";
import SelectedTarget from "../../components/SelectedTarget/SelectedTarget";

const HomePage = () => {
  const [imageSource, setImageSource] = useState("");
  const [selectedTarget, setSelectedTarget] = useState(null);
  const [selectedMap, setSelectedMap] = useState(null);

  const options = [
    {
      label: "Favela",
      onClick: () => {
        setImageSource(
          "https://www.hxchector.com/wp-content/uploads/2014/03/codmw2_Favela.jpg"
        );
        setSelectedMap("Favela");
        console.log("Favela");
      },
    },
    {
      label: "Afghan",
      onClick: () => {
        setImageSource(
          "https://www.hxchector.com/wp-content/uploads/2010/08/codmw2_Afghan.jpg"
        );
        setSelectedMap("Afghan");
        console.log("Afghan");
      },
    },
    {
      label: "Derail",
      onClick: () => {
        setImageSource(
          "https://www.hxchector.com/wp-content/uploads/2014/03/codmw2_Derail.jpg"
        );
        setSelectedMap("Derail");
        console.log("Derail");
      },
    },
    {
      label: "Highrise",
      onClick: () => {
        setImageSource(
          "https://www.hxchector.com/wp-content/uploads/2014/03/codmw2_Highrise.jpg"
        );
        setSelectedMap("Highrise");
        console.log("Highrise");
      },
    },
  ];

  const targets = [
    {
      x: 100,
      y: 200,
      name: "Target 1",
      map: "Favela",
      amount: 2,
      type: "Soldier",
    },
    {
      x: 250,
      y: 300,
      name: "Target 2",
      map: "Favela",
      amount: 3,
      type: "Vehicle",
    },
    {
      x: 300,
      y: 100,
      name: "Target 3",
      map: "Afghan",
      amount: 4,
      type: "Soldier",
    },
    {
      x: 200,
      y: 250,
      name: "Target 4",
      map: "Afghan",
      amount: 1,
      type: "AT Squad",
    },
    {
      x: 60,
      y: 50,
      name: "Target 5",
      map: "Derail",
      amount: 4,
      type: "Soldier",
    },
    { x: 150, y: 10, name: "Target 6", map: "Derail", amount: 2, type: "BMP" },
    {
      x: 300,
      y: 20,
      name: "Target 7",
      map: "Highrise",
      amount: 6,
      type: "Soldier",
    },
    {
      x: 170,
      y: 260,
      name: "Target 8",
      map: "Highrise",
      amount: 1,
      type: "Tank",
    },
  ];

  const handleTargetClick = (name) => {
    const clickedTarget = targets.find((target) => target.name === name);
    setSelectedTarget(clickedTarget);
    console.log("name: " + name);
  };

  const filteredTargets = targets.filter(
    (target) => target.map === selectedMap
  );

  return (
    <>
      <NavBar />
      <div className="container">
        <DropDown options={options} />
        <Map
          mapImage={imageSource}
          targets={filteredTargets}
          onTargetClick={handleTargetClick}
        />
        {selectedTarget && (
          <div>
            <h2>Selected Target:</h2>
            <SelectedTarget target={selectedTarget} />
          </div>
        )}
      </div>
    </>
  );
};

export default HomePage;
