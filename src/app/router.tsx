import { createBrowserRouter } from "react-router-dom";
import MobileLayout from "../components/layout/MobileLayout";
import Login from "../pages/login";
import NotFound from "../pages/404-not-found";

export const router = createBrowserRouter([
  {
    element: <MobileLayout />,
    children: [
      { path: "/", element: <Login /> },
      { path: "/login", element: <Login /> },
      { path: "*", element: <NotFound /> },
    ],
  },
]);
