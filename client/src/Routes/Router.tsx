import Experience from "@/pages/Experience/Experience";
import App from "../App";
import Home from "../pages/Home/Home/Home";
import { createBrowserRouter } from "react-router-dom";
import Service from "@/pages/Service/Service";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <div>Error 404: Page Not Found</div>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/experiences",
        element: <Experience />,
      },
      {
        path: "/services",
        element: <Service />,
      },
    ],
  },
]);
