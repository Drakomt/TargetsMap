import "./SelectedTarget.css";

const SelectedTarget = ({ target }) => {
  return (
    <div className="selected-target-card">
      <h2>{target.name}</h2>
      <p>Type: {target.type}</p>
      <p>Amount: {target.amount}</p>
      <p>Map: {target.map}</p>
      {/* Add more properties as needed */}
    </div>
  );
};

export default SelectedTarget;
