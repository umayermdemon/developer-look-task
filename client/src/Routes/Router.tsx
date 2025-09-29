import App from "../App";
import Home from "../pages/Home/Home/Home";
import { createBrowserRouter } from "react-router-dom";

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
        path: "/dummy",
        element: <div>This is a dummy page</div>,
      },
    ],
  },
]);
