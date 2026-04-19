const Login = () => {
  return (
    <div>
      <button>
        <img src="../assets/icons/Back-Button.svg" alt="Back button" />
      </button>

      <div>
        <img src="../assets/images/Vector.svg" alt="Utown logo" />
      </div>

      <form>
        <div>
          <input type="text" placeholder="Phone number" />
        </div>
        <div>
          <input type="text" placeholder="Password" />
        </div>
        <button type="submit">Log in</button>
      </form>
      <div>
        Forgot password?<button type="button">Recover</button>
      </div>
    </div>
  );
};

export default Login;
