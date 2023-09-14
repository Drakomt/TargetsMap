import React from "react";
import NavBar from "../../components/NavBar/NavBar";

const InfoPage = () => {
  return (
    <>
      <NavBar />
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-4">Welcome to TargetsMap</h1>
        <p className="mb-4">
          TargetsMap is a platform that allows you to explore various maps and
          view information about targets on those maps.
        </p>
        <h2 className="text-2xl font-semibold mb-2">Features</h2>
        <ul className="list-disc pl-4 mb-4">
          <li>Explore different maps from our collection.</li>
          <li>Click on targets to view detailed information.</li>
          <li>Switch between maps using the dropdown menu.</li>
        </ul>
        <h2 className="text-2xl font-semibold mb-2">Contact Us</h2>
        <p className="mb-4">
          If you have any questions or feedback, please feel free to contact us
          at <a href="mailto:contact@targetmap.com">contact@targetmap.com</a>.
        </p>
      </div>
    </>
  );
};

export default InfoPage;
