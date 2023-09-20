import "./TargetInfoPage.css";
import NavBar from "../../components/NavBar/NavBar";
import { useParams } from "react-router-dom";
import { data } from "../../../data";

const TargetInfoPage = () => {
  const params = useParams();
  const { id } = params;
  const target = data.targets.find((target) => target._id === Number(id));
  return (
    <>
      <NavBar />
      <div className="container">
        <div className="target-info-box">
          {/* <img
            src={target.image}
            alt={target.name}
            className="target-image"
          /> */}
          <div className="target-details">
            <h1 className="target-name">{target.name}</h1>
            {/* <p className="target-description">{target.description}</p> */}
            <div className="target-stats">
              <p className="target-amount">Amount: {target.amount}</p>
              <p className="target-type">Type: {target.type}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TargetInfoPage;
