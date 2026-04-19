import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/login";
import NotFound from "../pages/404-not-found";

export const router = createBrowserRouter([
  { path: "/", element: <Login /> },
  { path: "/login", element: <Login /> },
  { path: "*", element: <NotFound /> },
]);
