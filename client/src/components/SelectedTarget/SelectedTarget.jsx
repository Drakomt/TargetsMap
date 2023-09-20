import { useNavigate } from "react-router-dom";
import Button from "../Button/Button";
import "./SelectedTarget.css";

const SelectedTarget = ({ target }) => {
  const navigate = useNavigate();
  return (
    <div className="selected-target-card">
      <h2>{target.name}</h2>
      <p>Type: {target.type}</p>
      <p>Amount: {target.amount}</p>
      <p>Map: {target.map}</p>
      <Button
        content="More Info"
        onClick={() => {
          navigate(`/targetInfo/${target._id}`);
        }}
      />
    </div>
  );
};

export default SelectedTarget;
