// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";
import DropDown from "./components/DropDown/DropDown";

function App() {
  const options = [
    {
      label: "Option 1",
      onClick: () => {
        console.log("Option 1");
      },
    },
    {
      label: "Option 2",
      onClick: () => {
        console.log("Option 2");
      },
    },
  ];

  return (
    <div className="h-screen grid place-items-center bg-gradient-to-r from-sky-600 to-indigo-600">
      {/* <DropDown /> */}
      <DropDown options={options} />;
    </div>
  );
}

export default App;
