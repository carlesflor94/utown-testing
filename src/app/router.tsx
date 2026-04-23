import { createBrowserRouter } from "react-router-dom";
import MobileLayout from "../components/layout/MobileLayout";
import Login from "../pages/login";
import NotFound from "../pages/404-not-found";
import AppLoader from "./AppLoader";
import Opening from "../pages/opening";

export const router = createBrowserRouter([
  {
    element: <MobileLayout />,
    children: [
      { path: "/", element: <AppLoader /> },
      { path: "/opening", element: <Opening /> },
      { path: "/login", element: <Login /> },
      { path: "*", element: <NotFound /> },
    ],
  },
]);
