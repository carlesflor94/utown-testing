import "../styles/opening.scss";
import { useNavigate } from "react-router-dom";
import logo from "../assets/images/Vector.svg";

const Opening = () => {
  const navigate = useNavigate();
  return (
    <div className="opening">
      <div className="opening__content">
        <div className="opening__logo">
          <img src={logo} alt="Utown app logo" />
          <span>TOWN</span>
        </div>
      </div>

      <div className="opening__buttons">
        <button className="opening__login" onClick={() => navigate("/login")}>
          Log in
        </button>
        <button className="opening__register">Register</button>
      </div>
    </div>
  );
};

export default Opening;
