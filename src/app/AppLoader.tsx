import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Splash from "../pages/splashscreen";

const AppLoader = () => {
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const startApp = async () => {
      await new Promise((res) => setTimeout(res, 2000));
      const token = localStorage.getItem("token");

      if (token) {
        navigate("/home");
      } else {
        navigate("/opening");
      }

      setLoading(false);
    };
    startApp();
  }, [navigate]);

  if (loading) return <Splash />;

  return null;
};

export default AppLoader;
