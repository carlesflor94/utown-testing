import "../styles/login.scss";
import backIcon from "../assets/icons/Back-Button.svg";
import logo from "../assets/images/Vector.svg";

const Login = () => {
  return (
    <div className="login">
      <button className="login__back">
        <img src={backIcon} alt="Back button" />
      </button>

      <div className="login__logo">
        <img src={logo} alt="Utown logo" />
      </div>

      <form className="login__form">
        <input type="text" placeholder="Phone number" />

        <input type="password" placeholder="Password" />

        <button type="submit">Log in</button>
      </form>
      <div className="login__recover">
        Forgot password?<button type="button">Recover</button>
      </div>
    </div>
  );
};

export default Login;
